<template>
  <div>
    <AdminHeader />
    <nuxt />
  </div>
</template>

<script>
import AdminHeader from '@/components/navigation/AdminHeader.vue'
export default {
  name: 'BlogAdminLayout',
  components: {
    AdminHeader,
  },
}
</script>

<!-- <style>
html {
  font-family: 'Open Sans', sans-serif;
}
body {
  margin: 0;
}
</style> -->
