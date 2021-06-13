<template>
  <div id="beginner">
    <beginner-header />
    <nuxt />
  </div>
</template>

<script>
import BeginnerHeader from '~/components/BeginnerHeader';

export default {
  components: {
    BeginnerHeader,
  },
};
</script>
