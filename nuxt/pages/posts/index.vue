<template>
  <div class="posts-page">
    <post-list :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '~/components/Posts/PostList.vue';

export default {
  components: {
    PostList,
  },
  asyncData(context, callback) {
    console.log('async data');
    setTimeout(() => {
      // execute a callback method that first passes an error handling method (if error occurs, otherwise just put null) and second argument is the javascript object, i.e. the data, that we can access from client when the request completed gracefully
      callback(null, {
        loadedPosts: [
          {
            id: '1',
            title: 'frst post',
            previewText: 'This is preview text',
            thumbnail: '/code.jpg',
          },
          {
            id: '2',
            title: 'second post',
            previewText: 'This is preview text',
            thumbnail: '/code.jpg',
          },
          {
            id: '3',
            title: 'third post',
            previewText: 'This is preview text',
            thumbnail: '/code.jpg',
          },
        ],
      });
    }, 1500);
  },
  created() {
    this.$store.dispatch('setPosts', this.loadedPosts);
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
