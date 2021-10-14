<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <post-list :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '~/components/Posts/PostList';

export default {
  components: {
    PostList,
  },
  // asyncData(context, callback) {
  //   setTimeout(() => {
  //     // execute a callback method that first passes an error handling method (if error occurs, otherwise just put null) and second argument is the javascript object, i.e. the data, that we can access from client when the request completed gracefully
  //     callback(null, {
  //       loadedPosts: [
  //         {
  //           id: '1',
  //           title: 'frst post',
  //           previewText: 'This is preview text',
  //           thumbnail: '/code.jpg',
  //         },
  //         {
  //           id: '2',
  //           title: 'second post',
  //           previewText: 'This is preview text',
  //           thumbnail: '/code.jpg',
  //         },
  //         {
  //           id: '3',
  //           title: 'third post',
  //           previewText: 'This is preview text',
  //           thumbnail: '/code.jpg',
  //         },
  //       ],
  //     });
  //   }, 1500);
  // },
  asyncData() {
    // Alternative: we return a promise in asyncData, then async data will take that promise and listen to it and render to page once it is resolved.
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
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
    })
      .then((data) => {
        return data;
      })
      .catch((e) => {
        context.error(new Error('This is error'));
      });
  },
};
</script>

<style lang="scss" scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  background-image: url('/main-page-background.jpg');
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>
