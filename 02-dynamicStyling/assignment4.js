const assignmentApp4 = Vue.createApp({
  data() {
    return {
      inputValue: '',
      visible: true,
      inputColor: '',
    };
  },
  computed: {
    setClass() {
      return {
        user1: this.inputValue.toLowerCase() === 'user1',
        user2: this.inputValue.toLowerCase() === 'user2',
        visible: this.visible,
        hidden: !this.visible,
      };
    },
  },
  methods: {
    setInputValue(event) {
      this.inputValue = event.target.value;
    },
    setVisibility() {
      this.visible = !this.visible;
    },
    setInputColor(event) {
      this.inputColor = event.target.value;
    },
  },
});

assignmentApp4.mount('#assignment4');
