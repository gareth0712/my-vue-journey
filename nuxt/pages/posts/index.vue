<template>
  <div class="posts-page">
    <post-list />
  </div>
</template>

<script>
import PostList from '~/components/Posts/PostList.vue';

export default {
  components: {
    PostList,
  },
};
</script>

<style lang="scss" scoped>
.post-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
