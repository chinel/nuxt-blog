<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="updatePost" />
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BlogAdminPost',
  layout: 'admin',
  asyncData(context) {
    // eslint-disable-next-line nuxt/no-timing-in-fetch-data

    return axios
      .get(process.env.baseURL + `/posts/${context.params.postId}.json`)
      .then((res) => {
        console.log('res-->', res)
        return { loadedPost: res.data }
      })
      .catch((err) => {
        context.err(err)
      })
  },
  methods: {
    updatePost(postData) {
      this.$store
        .dispatch('editPost', { id: this.$route.params.postId, post: postData })
        .then(() => {
          this.$router.push('/admin')
        })
    },
  },
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
