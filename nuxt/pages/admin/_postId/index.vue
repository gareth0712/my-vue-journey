<template>
  <div class="admin-post-page">
    <section class="update-form">
      <admin-post-form :post="loadedPost" />
    </section>
  </div>
</template>

<script lang="ts">
import AdminPostForm from '@/components/Admin/AdminPostForm.vue';
import Vue from 'vue';

export default Vue.extend({
  components: {
    AdminPostForm,
  },
  data() {
    return {
      loadedPost: {
        author: 'Max',
        title: 'My awesome post',
        content: 'Good content',
        thumbnailLink: '/code.jpg',
      },
    };
  },
  layout: 'admin',
});
</script>

<style lang="scss" scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
