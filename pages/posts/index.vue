<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/posts/PostList'
export default {
  name: 'BlogPosts',
  components: {
    PostList,
  },
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
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
