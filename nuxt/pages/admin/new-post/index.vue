<template>
  <div class="admin-new-post-page">
    <admin-post-form class="new-post-form" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AdminPostForm from '@/components/Admin/AdminPostForm.vue';

export default Vue.extend({
  components: {
    AdminPostForm,
  },
  layout: 'admin',
});
</script>
