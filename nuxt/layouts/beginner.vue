<template>
  <div id="beginner">
    <BeginnerHeader />
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
