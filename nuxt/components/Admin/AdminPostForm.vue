<template>
  <form class="new-post-form" @submit.prevent="onSave">
    <app-control-input v-model="editedPost.author"
      >Author Name</app-control-input
    >
    <app-control-input v-model="editedPost.title">Title</app-control-input>
    <app-control-input v-model="editedPost.thumbnailLink"
      >Thumbnail Link</app-control-input
    >
    <app-control-input control-type="textarea" v-model="editedPost.content"
      >Content</app-control-input
    >
    <app-button type="submit">Save</app-button>
    <app-button
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
      >Cancel</app-button
    >
  </form>
</template>

<script lang="ts">
import AppControlInput from '@/components/UI/AppControlInput.vue';
import AppButton from '@/components/UI/AppButton.vue';

export default {
  components: {
    AppControlInput,
    AppButton,
  },
  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: '',
            title: '',
            thumbnailLink: '',
            content: '',
          },
    };
  },
  methods: {
    onSave() {
      // Save the post
      console.log(this.editedPost);
    },
    onCancel() {
      // Navigate back
      this.$router.push('/admin');
    },
  },
};
</script>

<style lang="scss" scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
