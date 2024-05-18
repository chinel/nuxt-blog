import axios from 'axios'
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
        return axios
          .get('https://nuxt-blog-46857-default-rtdb.firebaseio.com/posts.json')
          .then((res) => {
            const postArray = []

            for (const key in res.data) {
              postArray.push({ ...res.data[key], id: key })
            }
            vuexContext.commit('setPosts', { posts: postArray })
          })
          .catch((err) => {
            context.error(err)
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
