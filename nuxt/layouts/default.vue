<template>
  <v-app dark>
    <Header />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from '~/components/Header';

export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
.v-main {
  margin-top: 50px;
}
</style>
