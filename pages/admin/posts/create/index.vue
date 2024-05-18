<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmit" />
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from '@/components/admin/AdminPostForm.vue'
export default {
  name: 'BlogAdminCreate',
  components: {
    AdminPostForm,
  },
  layout: 'admin',
  methods: {
    onSubmit(postData) {
      axios
        .post(
          'https://nuxt-blog-46857-default-rtdb.firebaseio.com/posts.json',
          postData
        )
        .then((data) => {
          console.log(data)
          this.$router.push('/admin')
        })
        .catch((err) => {
          console.log(err)
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
