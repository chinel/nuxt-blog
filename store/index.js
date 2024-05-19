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
      addPost(state, payload) {
        state.loadedPosts.push(payload.post)
      },

      editPost(state, payload) {
        const postIndex = state.loadedPosts.findIndex(
          (post) => post.id === payload.editedPost.id
        )
        state.loadedPosts[postIndex] = payload.editedPost
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
            context.error(err.message)
          })
      },
      setPosts(vuexContext, payload) {
        vuexContext.commit('setPosts', payload)
      },
      editPost(vuexContext, editedPost) {
        return axios
          .put(
            `https://nuxt-blog-46857-default-rtdb.firebaseio.com/posts/${editedPost.id}.json`,
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
        return axios
          .post(
            'https://nuxt-blog-46857-default-rtdb.firebaseio.com/posts.json',
            createdPost
          )
          .then((res) => {
            vuexContext.commit('addPost', {
              post: { ...createdPost, id: res.data.name },
            })
          })
          .catch((err) => {
            console.log(err)
          })
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
