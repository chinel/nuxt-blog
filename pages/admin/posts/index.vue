<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/posts/create')"
        >Create Post</AppButton
      >
    </section>
    <section class="existing-posts">
      <h1>Post</h1>
      <PostList :is-admin="true" :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'BlogAdmin',
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    },
  },
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
