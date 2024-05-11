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
import PostList from '@/components/posts/PostList'
import AppButton from '@/components/ui/AppButton'
export default {
  name: 'BlogAdmin',
  components: {
    PostList,
    AppButton,
  },
  layout: 'admin',
  data() {
    return {
      loadedPosts: [
        {
          id: '1',
          author: 'Ann',
          title: 'This is my First Post',
          thumbnailLink:
            'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
          previewText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nunc at tellus vehicula consequat.',
        },
        {
          id: '2',
          author: 'Ann',
          title: 'This is my First Post',
          thumbnailLink:
            'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
          previewText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nunc at tellus vehicula consequat.',
        },
        {
          id: '3',
          author: 'Ann',
          title: 'This is my First Post',
          thumbnailLink:
            'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
          previewText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nunc at tellus vehicula consequat.',
        },
      ],
    }
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
