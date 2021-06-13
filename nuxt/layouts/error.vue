<template>
  <div class="error-page">
    <h1>{{ errorMsg }}</h1>
    <p>Back to <nuxt-link to="/"> Home page </nuxt-link></p>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    return {
      title: this.errorMsg,
    };
  },
  computed: {
    errorMsg() {
      if (this.error.statusCode === 404) {
        return '404 Not Found';
      } else {
        return 'An error occurred';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.error-page {
  text-align: center;
}

.error-page a {
  text-decoration: none;
  color: red;
}

.error-page a:hover,
.error-page a:active {
  color: salmon;
}
</style>
