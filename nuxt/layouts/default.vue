<template>
  <div>
    <the-header @sidenavToggle="displaySidenav = !displaySidenav" />
    <the-sidenav :show="displaySidenav" @close="displaySidenav = false" />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader';
import TheSidenav from '@/components/Navigation/TheSidenav';

export default {
  components: {
    TheHeader,
    TheSidenav,
  },
  data() {
    return {
      displaySidenav: false,
    };
  },
};
</script>

<style>
html {
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: 0;
}
</style>
