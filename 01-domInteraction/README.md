# Chapter 01 DOM Interaction

[file reference](index.html)

## Section 1: Data properties and methods

- Data properties

  - Store data in key-value pair;
  - Always return object;
  - Anything that makes sense for storage / usage: string, number, boolean, arrays, and objects are all available

- Method option  
  find functions to execute when something happen e.g. user input;  
  name of function is up to us, but everything inside methods option must be a function, i.e. callable
- v-bind (shorthand is a colon)
  Using v-bind tells Vue to dynamically set the attribute of an HTML element so that we can use the data in Data property even for value of an attribute  
  Normally using this would refer to the app object  
  Vue has done some work to make every property inside data option available to the app object  
  And thus we can access the data merely using this keyword

  How to use the shorthand?  
  e.g. `<a v-bind:href="vueLink">about Vue</a>`  
  becomes `<a :href="vueLink">about Vue</a>`

- Referencing to various properties (e.g. data properties, computed properties and methods)  
  Other than referencing the Vue data properties, We can even execute simple Javascript expression inside {{}}  
  e.g. `<p>{{ vueLink }}</p>`

  We can also execute methods inside by passing a parenthesis.  
  e.g. `<p>{{ outputGoal() }}</p>`

- v-html  
  This allows Vue to produce HTML element. However, this produces potential security threat for XSS
  Thus, Not suggested to use unless 100% necessary and with sufficient security measure

  ```
  <p v-html="h1Title"></p>
  <p v-html="outputHtmlEl()"></p>
  ```

## Section 2: handling user input

- v-on (Shorthand: @)  
  Can listen to any event that is available for the HTML element. We can actually put counter++ inside @click. But it is not a good practice because html is supposed to be presenting the content while JS is responsible for handling the logic

  How to use shorthand?
  e.g. `<button v-on:click="counter++">Add</button>`
  becomes `<button @click="counter++">Add</button>`

  When we created method e.g. `handleClick` to be listened for click event, we should do `@click="handleClick"`.

  We Shouldn't add parenthesis as we are referencing the function not calling them. It should only be called when the click event occurs. Vue actually accepts both with or without parenthesis though.

  We can overwrite the default event object to be passed to the function by providing a customized input e.g. the 10 in add(10) is a customized input

  ```
  <button @click="add(10)">Add 10</button>
  <button @click="minus(5)">Minus 5</button>
  ```

  - The browser sends the event object automatically upon the event happens
  - This function is not required when we use the v-model for handling the event binding
  - To preserve the event object, we use "$event" for the method so that we can provide custom input and preserve the original $event object at the same time
  `<input type="text" @input="setName($event, 'Lau')" @keyup.enter="confirmInput" />`

- v-once  
  This tells Vue that any dynamic data binding should only be evaluated once; so any changes to the data binded will not be reflected.

  e.g. `<p v-once>Starting Counter: {{ counter }}</p>`

- v-model  
  Reference: https://learnvue.co/2021/01/everything-you-need-to-know-about-vue-v-model/  
  Very often used in form where user provides input. There is no shorthand for v-model. It is a two way binding: both data binding and event binding together by

  1. listening to the input element for updating the data "newName"
  2. Writing the newName variable back to the input element through the "newName" property

  e.g. `<input type="text" :value="newName" @input="newName = $event.target.value" />`  
  becomes `<input type="text" v-model="newName" />`

  two-way binding explained:

  1. Data changes => the Input value changes
  2. Input changes => the data changes

- Event modifiers

  - Reference: https://vuejs.org/v2/guide/events.html#Event-Modifiers
  - The syntax is `@<event>.<event modifier>` and "prevent" is a event modifier that prevent form submission default behavior of refreshing the page

  ```
  <form @submit.prevent="submitForm">
    <input type="text" />
    <button>Sign Up</button>
  </form>
  ```

  - Modifiers that changes when the event occurs  
    @click.middle or @click.right to indicate the eventHandler is fired only middle / right mouse button is clicked

## Section 3: Computed property

- Computed property

  - First we look at How Vue works:  
    When any Vue-controlled element changes, Vue scans for the page to see what it needs to update for the page / rerender => e.g. when we press the add button, the counter data property updates and so Vue updated the `<p>Result: {{ counter }}</p>` HTML element.  
    Then, for any method used on the page, e.g. outputFullname() below, since Vue does not know whether it uses the counter variable or any other data property, it always re-executes the method again to ensure that the output of outputFullname() is always updated.  
    `<p>Full Name: {{ outputFullname() }}</p>`  
    Therefore, from performance perspective, using methods is not ideal for Vue as Vue re-executes the methods whenever anything changes.

  ***

  - Ideal solution: using computed property => It is for returning a computed value whenever certain data property(ies) changes
  - No parenthesis; We use them like data properties, not functions. Vue first checks from data() to find fullname. If couldn't find, then it looks for fullname in computed().

  ```
  <p>[Computed property]Full Name: {{ fullname }}</p>
  ...
  computed: {
    // Naming convension: although it is a method, but it is used as a data property
    // So we use fullname instead of outputFullname
    // For fullname, it runs only when newName or newLastName changes
    fullname() {
      if (this.newName === '' || this.newLastName === '') return '';
      return `${this.newName} ${this.newLastName}`;
    },
  },
  ```

## Section 4: Watchers

- Watch option for watchers  
  We see that watcher is doing sth similar to computed properties. Can watcher replace them?  
  Imagine a situation when we need to watch two variables (e.g. see newName and newLastName below) for one newFullname property  
  We then need to write a watcher for both newName and newLastName with similar code
  This execution is worse than computed property  
  So why we need watcher? It is mainly use for any non-data update

  1. Sending HTTP request when data changes / reaches certain value
  2. doing something when the data property reaches certain value
     For example, resetting the counter or even set a timer to reset counter when it reaches 100
     You will understand more by watching B and C usage below

  A. Not ideal usage of watcher: Doing something whenever the data value changes  
  Repeat the data / computed properties' name to set as a watcher of that property  
  So it will fire everytime the data property "name" changes  
  1st argument: "value" argument refers to the latest value of the data / computed property  
  2nd argument: "oldValue" argument refers to the old value of the data / computed property

  ```
  newName(value) {
    // We don't return anything as it is not a callable function
    if (value === '') {
      this.newFullname = '';
    } else {
      this.newFullname = `${value} Lau`;
    }
  },
  ```

  ```
  newLastName(value) {
    if (value === '') {
      this.newFullname = '';
    } else {
      this.newFullname = `${this.newName} ${value}`;
    }
  },
  ```

  B. Resetting the data value when it reaches certain value  
  You will know why it's the ideal usage when u try to use computed property for this kind of event

  ```
  counter(value) {
    if (value > 100) this.counter = 0;
  },
  ```

  C. Set a timer to reset value when it reaches 100

  ```
  counter(value) {
    if (value > 100) {
      Using this keyword inside the callback fn of setTimeout will lose the counter data property
      So we store object referred by this in that to maintain the track of counter data property
      const that = this;
      setTimeout(() => {
        that.counter = 0;
      }, 2000);
    }
  },
  ```

## Section 5: Integrate Vue with Javascript and HTML elements

- When Vue scans for the elements in HTML, it identifies elements in Vue syntax, for example Using Data Interpolation(i.e. {{ courseGoal }}) in HTML: Return the properties value described in the returned object in data property and output to the HTML element
- If using it out of Vue's controlled element, it will output as `{{ courseGoal }}`
- So how do we tell Javascript to make use of Vue?
  1. We define a Vue app by `Vue.createApp` and provide an object that contains the data properties, computed properties etc inside
  2. Then for the Vue app object we call the `.mount` method to mount existing HTML element (We often use IDs as the unique identifier of a HTML element)  
     For example, lines below show how we create a Vue app that mounts the `#user-goal` element

```
const app = Vue.createApp({
  data() {
    return {
      ...
    }
  },
  ...
})

app.mount('#user-goal');
```
