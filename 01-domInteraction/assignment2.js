const assignmentApp2 = Vue.createApp({
  data() {
    return {
      output: 'Default Output',
      confirmedOutput: 'Default Output 2',
    };
  },
  methods: {
    showAlert() {
      alert('Alert!');
    },
    showOutput(event) {
      this.output = event.target.value;
    },
    confirmOutput() {
      this.confirmedOutput = this.output;
    },
  },
});

assignmentApp2.mount('#assignment2');
