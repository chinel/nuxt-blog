<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '@/components/navigation/TheHeader'
import TheSidenav from '@/components/navigation/TheSidenav'
export default {
  name: 'BlogDefaultLayout',
  components: {
    TheHeader,
    TheSidenav,
  },
  data() {
    return {
      displaySidenav: false,
    }
  },
}
</script>
