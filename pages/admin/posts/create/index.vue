<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmit" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'BlogAdminCreate',
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  methods: {
    onSubmit(postData) {
      this.$store
        .dispatch('addPost', postData)
        .then(() => {
          this.$router.push('/admin')
        })
        .catch((e) => {
          console.log(e)
          if (e.message === 'Unauthorized') {
            this.$router.push('/admin/auth')
          }
        })
    },
  },
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
