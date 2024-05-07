<template>
  <section class="post-list">
    <PostPreview
      id="1"
      title="This is my first post"
      preview-text="This is a small description about the first post"
      thumbnail="https://live.staticflickr.com/2606/4469724658_b97305a5f0_c.jpg"
    />
    <PostPreview
      id="2"
      title="This is my first post"
      preview-text="This is a small description about the first post"
      thumbnail="https://live.staticflickr.com/2606/4469724658_b97305a5f0_c.jpg"
    />
  </section>
</template>

<script>
import PostPreview from '@/components/posts/PostPreview'

export default {
  name: 'BlogPostLists',
  components: {
    PostPreview,
  },
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
