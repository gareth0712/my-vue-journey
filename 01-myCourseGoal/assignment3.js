const assignmentApp3 = Vue.createApp({
  data() {
    return {
      result: 0,
      timerOn: false,
      myTimer: null,
    };
  },
  methods: {
    add(num) {
      this.result += num;
    },
  },
  computed: {
    outputResultText() {
      if (this.result === 0) {
        return '0';
      } else if (this.result < 37) {
        return 'Not there yet';
      } else if (this.result > 37) {
        return 'Too much!';
      } else {
        return '37';
      }
    },
  },
  watch: {
    result() {
      if (this.timerOn === false && this.result > 0) {
        const that = this;
        this.timerOn = true;
        that.myTimer = setTimeout(() => {
          that.result = 0;
          that.timerOn = false;
        }, 5000);
      }
      if (this.myTimer && this.result === 37) {
        clearTimeout(this.myTimer);
        this.timerOn = false;
      }
    },
  },
});

assignmentApp3.mount('#assignment3');
