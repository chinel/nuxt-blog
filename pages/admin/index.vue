<template>
  <div>
    <section class="intro">
      <h1>Welcome Admin.</h1>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BlogAdmin',
  beforeRouteEnter(to, from, next) {
    next('/admin/posts')
  },
  layout: 'admin',
}
</script>
