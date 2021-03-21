const assignmentApp = Vue.createApp({
  data() {
    return {
      name: 'Gary',
      age: 21,
      image: 'https://vuejs.org/images/logo.png',
    };
  },
  methods: {
    randomNumber() {
      return Math.random();
    },
  },
});

assignmentApp.mount('#assignment');
