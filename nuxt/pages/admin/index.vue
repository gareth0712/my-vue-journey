<template>
  <div class="admin-page">
    <section class="new-post">
      <app-button @click="$router.push('/admin/new-post')"
        >Create Post</app-button
      >
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <post-list isAdmin />
    </section>
  </div>
</template>

<script lang="ts">
import PostList from '@/components/Posts/PostList.vue';
import AppButton from '@/components/UI/AppButton.vue';

export default {
  components: {
    PostList,
    AppButton,
  },
  layout: 'admin',
};
</script>

<style lang="scss" scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
