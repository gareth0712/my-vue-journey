<template>
  <div id="beginner">
    <beginner-header />
    <nuxt />
  </div>
</template>

<script>
import BeginnerHeader from '~/components/Navigation/BeginnerHeader';

export default {
  components: {
    BeginnerHeader,
  },
};
</script>
