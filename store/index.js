import { Store } from 'vuex'
import Cookies from 'js-cookie'
import { errorMessages } from '~/utils/constants'

const createStore = () => {
  return new Store({
    state: {
      loadedPosts: [],
      token: null,
      authError: '',
    },
    mutations: {
      setPosts(state, payload) {
        state.loadedPosts = payload.posts
      },
      addPost(state, payload) {
        state.loadedPosts.push(payload.post)
      },

      editPost(state, payload) {
        const postIndex = state.loadedPosts.findIndex(
          (post) => post.id === payload.editedPost.id
        )
        state.loadedPosts[postIndex] = payload.editedPost
      },
      setToken(state, token) {
        state.token = token
      },
      setAuthError(state, message) {
        state.authError = message
      },
      clearToken(state) {
        state.token = null
      },
    },

    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios
          .$get('/posts.json')
          .then((data) => {
            const postArray = []

            for (const key in data) {
              postArray.push({ ...data[key], id: key })
            }
            vuexContext.commit('setPosts', { posts: postArray })
          })
          .catch((err) => {
            context.error(err.message)
          })
      },
      setPosts(vuexContext, payload) {
        vuexContext.commit('setPosts', payload)
      },
      editPost(vuexContext, editedPost) {
        return this.$axios
          .$put(
            process.env.baseURL +
              `/posts/${editedPost.id}.json?auth=${vuexContext.state.token}`,
            editedPost.post
          )
          .then((data) => {
            vuexContext.commit('editPost', { editedPost: editedPost.post })
          })
          .catch((err) => {
            console.log(err)
          })
      },
      addPost(vuexContext, postData) {
        const createdPost = { ...postData, updatedDate: new Date() }
        return this.$axios
          .$post(
            process.env.baseURL + `/posts.json?auth=${vuexContext.state.token}`,
            createdPost
          )
          .then((data) => {
            vuexContext.commit('addPost', {
              post: { ...createdPost, id: data.name },
            })
          })
          .catch((err) => {
            console.log(err)
          })
      },
      authenticateUsers(vuexContext, authData) {
        let path
        if (!authData.isLogin) {
          path = 'signUp'
        } else {
          path = 'signInWithPassword'
        }
        return this.$axios
          .$post(
            `https://identitytoolkit.googleapis.com/v1/accounts:${path}?key=${process.env.fbAPIKEY}`,
            {
              email: authData.email,
              password: authData.password,
              returnSecureToken: true,
            }
          )
          .then((result) => {
            const expirationDate = new Date() + result.expiresIn * 1000
            vuexContext.commit('setAuthError', '')

            vuexContext.commit('setToken', result.idToken)
            localStorage.setItem('token', result.idToken)
            localStorage.setItem('tokenExpiration', expirationDate)
            Cookies.set('jwt', result.idToken)
            Cookies.set('expirationDate', expirationDate)
            vuexContext.dispatch('setLogoutTimer', result.expiresIn * 1000)
          })
          .catch((error) => {
            if (error.response) {
              const message = error.response.data.error.message

              if (errorMessages[message]) {
                vuexContext.commit('setAuthError', errorMessages[message])
              } else {
                vuexContext.commit(
                  'setAuthError',
                  'An error occured. Please try again.'
                )
              }
            } else {
              vuexContext.commit(
                'setAuthError',
                'An error occured. Please try again.'
              )
            }
            throw new Error('An error occured')
          })
      },
      setLogoutTimer(vuexContext, duration) {
        setTimeout(() => {
          vuexContext.commit('clearToken')
        }, duration)
      },
      initAuth(vuexContext, req) {
        let token
        let expirationDate
        if (req) {
          if (!req.headers.cookie) {
            return
          }

          const jwtCookie = req.headers.cookie
            .split(';')
            .find((c) => c.trim().startsWith('jwt='))
          if (!jwtCookie) {
            return
          }
          token = jwtCookie.split('=')[1]

          const jwtExpirationDate = req.headers.cookie
            .split(';')
            .find((c) => c.trim().startsWith('expirationDate='))

          expirationDate = jwtExpirationDate.split('=')[1]
        } else {
          token = localStorage.getItem('token')
          expirationDate = localStorage.getItem('tokenExpiration')

          if (new Date().getTime() > +expirationDate || !token) {
            return
          }
        }

        vuexContext.dispatch(
          'setLogoutTimer',
          +expirationDate - new Date().getTime()
        )

        vuexContext.commit('setToken', token)
      },
    },

    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      authError(state) {
        return state.authError
      },
      isAuthenticated(state) {
        return state.token != null
      },
    },
  })
}

export default createStore
