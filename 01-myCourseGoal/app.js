///////////////////////////////////////////////////
///// Chapter 1: data properties and methods /////
/////////////////////////////////////////////////
// Create a vue app to control a HTML element => Returns a Vue app object to store in app variable
// Controlling a HTML element also allows us to control all child elements of that element
const app = Vue.createApp({
  // Cannot be any random name but only pre-defined ones by Vue
  // 1. Data option: store data in key-value pair
  // Below is the same as data: function() {}
  data() {
    // Always return object
    return {
      // Anything that makes sense for storage / usage
      // string, number, boolean, arrays, and objects are all available
      courseGoalA: 'Finish the course and learn Vue',
      courseGoalB: 'Master Vue',
      vueLink: 'https://vuejs.org/',
      h1Title: '<button>Master Vue!</button>',
    };
  },
  // 2. Methods option: find functions to execute when something happen e.g. user input
  methods: {
    // name of function is up to us, but everything inside methods option must be a function, i.e. callable
    outputGoal() {
      const randomNumber = Math.random();
      // Normally using this would refer to the app object
      // Vue has done some work to make every property inside data option available to the app object
      // And thus we can access the data merely using this keyword
      if (randomNumber < 0.5) return this.courseGoalA;
      return this.courseGoalB;
    },
    outputHtmlEl() {
      return '<h1>Master Vue!</h1>';
    },
  },
});

///////////////////////////////////////////////
///// Chapter 2: Handling user input /////////
//////////////////////////////////////////////
const eventApp = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
      newName: '',
      newLastName: '',
      newFullname: '',
    };
  },
  methods: {
    add(num) {
      // No need to return anything since it is the event listener that handles the click event
      this.counter += num;
    },
    minus(num) {
      this.counter -= num;
    },
    // The browser sends the event object automatically upon the event happens
    // This function is not required when we use the v-model for handling the event binding
    setName(event, lastName) {
      if (!lastName) {
        this.name = event.target.value;
      } else {
        this.name = `${event.target.value} ${lastName}`;
      }
    },
    outputFullname() {
      console.log('Running again...');
      if (this.newName === '') return '';
      return `${this.newName} Lau`;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('Form submitted');
    },
    resetInput() {
      this.newName = '';
      this.newLastName = '';
    },
  },
  // 3. Computed option for Computed Properties
  computed: {
    // Naming convension: although it is a method, but it is used as a data property
    // So we use fullname instead of outputFullname
    fullname() {
      console.log('Running again...');
      if (this.newName === '' || this.newLastName === '') return '';
      return `${this.newName} ${this.newLastName}`;
    },
  },
  // 4. Watch option for watchers
  watch: {
    // Repeat the data / computed properties' name to set as a watcher of that property
    // So it will fire everytime the data property "name" changes
    // 1st argument: "value" argument refers to the latest value of the data / computed property
    // 2nd argument: "oldValue" argument refers to the old value of the data / computed property
    // Can watcher replace computed properties?
    // Imagine a situation when we need to watch two variables (newName, newLastName) for one newFullname property
    // We then need to write a watcher for both newName and newLastName with similar code
    // This execution is worse than computed property
    newName(value) {
      // We don't return anything as it is not a callable function
      if (value === '') {
        this.newFullname = '';
      } else {
        this.newFullname = `${value} Lau`;
      }
    },
    // newLastName(value) {
    //   if (value === '') {
    //     this.newFullname = '';
    //   } else {
    //     this.newFullname = `${this.newName} ${value}`;
    //   }
    // },
  },
});

// When Vue scans for the elements in HTML, it identifies elements in Vue syntax, for example
// Using Data Interpolation(i.e. {{ courseGoal }}) in HTML: Return the properties value described in the returned object in data property and output to the HTML element
// If using it out of Vue's controlled element, it will output as "{{ courseGoal }}"

// Typically we use IDs as the unique identifier of a HTML element
// Connect to the "<section />" element
app.mount('#user-goal');
eventApp.mount('#events');
