<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '~/components/admin/AdminPostForm.vue'

export default {
  name: 'BlogAdminPost',
  components: {
    AdminPostForm,
  },
  data() {
    return {
      loadedPost: {
        author: 'Ann',
        title: 'This is my First Post',
        thumbnailLink:
          'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nunc at tellus vehicula consequat. Donec ut ullamcorper elit. Cras a nisl lacinia, vehicula mauris a, vehicula urna. Suspendisse potenti. Nulla viverra ligula vitae sem consequat, eu placerat turpis egestas. Donec at neque nec mi vehicula pellentesque et ac ex. Phasellus ac massa gravida, auctor nunc eu, consectetur sem. Donec viverra vulputate orci, quis hendrerit metus vehicula non. Nulla facilisi. Vivamus facilisis, risus bibendum egestas pretium, orci justo vehicula lectus, et lobortis orci metus et nisl. Nunc accumsan aliquam faucibus. Phasellus vitae mauris sed arcu pulvinar mollis. Aliquam eu mollis dolor, quis sodales urna.',
      },
    }
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
