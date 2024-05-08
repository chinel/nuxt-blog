<template>
  <div class="admin-page">
    <section class="new-post">
      <button @click="$router.push('/admin/posts/create')">Create Post</button>
    </section>
    <section class="existing-posts">
      <h1>Post</h1>
      <PostList />
    </section>
  </div>
</template>

<script>
import PostList from '@/components/posts/PostList'

export default {
  name: 'BlogAdmin',
  components: {
    PostList,
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
