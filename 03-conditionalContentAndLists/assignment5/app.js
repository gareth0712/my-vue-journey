const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTaskValue: '',
      showTasks: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
    toggleShowTasks() {
      this.showTasks = !this.showTasks;
    },
  },
});

app.mount('#assignment5');
