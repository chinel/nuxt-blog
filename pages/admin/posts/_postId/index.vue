<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="updatePost" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'BlogAdminPost',
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  asyncData(context) {
    // eslint-disable-next-line nuxt/no-timing-in-fetch-data

    return context.app.$axios
      .$get(`/posts/${context.params.postId}.json`)
      .then((data) => {
        return { loadedPost: data }
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
        .catch((e) => {
          console.log(e.message)
          if (e.message === 'Unauthorized') {
            this.$router.push('/admin/auth')
          }
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
