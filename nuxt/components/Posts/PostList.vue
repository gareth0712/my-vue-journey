<template>
  <section class="post-list">
    <post-preview
      id="1"
      :is-admin="isAdmin"
      thumbnail="/code.jpg"
      title="Why coders like Typescript over Javascript"
      previewText="This is my first post!"
    />
    <post-preview
      id="2"
      :is-admin="isAdmin"
      thumbnail="/code2.jpg"
      title="Why coders like Stack overflow"
      previewText="This is my second post!"
    />
    <post-preview
      id="3"
      :is-admin="isAdmin"
      thumbnail="/code3.jpg"
      title="Why coders like VS Code"
      previewText="This is my third post!"
    />
  </section>
</template>

<script>
import PostPreview from '~/components/Posts/PostPreview.vue';

export default {
  components: {
    PostPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
