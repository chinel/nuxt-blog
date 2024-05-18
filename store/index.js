import { Store } from 'vuex'

const createStore = () => {
  return new Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, payload) {
        state.loadedPosts = payload.posts
      },
    },

    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          // eslint-disable-next-line nuxt/no-timing-in-fetch-data
          setTimeout(() => {
            vuexContext.commit('setPosts', {
              posts: [
                {
                  id: '1',
                  author: 'Ann',
                  title: `This is my First Post ${
                    context.params.id ? `(ID: ${context.params.id})` : ``
                  }`,
                  updatedDate: new Date(),
                  content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nunc at tellus vehicula consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nunc at tellus vehicula consequat.',
                  thumbnailLink:
                    'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
                  previewText:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nunc at tellus vehicula consequat.',
                },
              ],
            })
            resolve()
          }, 1000)

          // if you want to throw an error, comment out the settimeout above and use the below
          //   reject(new Error('An Error occured.'))
        })
      },
      setPosts(vuexContext, payload) {
        vuexContext.commit('setPosts', payload)
      },
    },

    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
    },
  })
}

export default createStore
