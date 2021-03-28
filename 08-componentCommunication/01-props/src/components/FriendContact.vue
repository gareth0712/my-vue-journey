<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="$emit('delete-friend', id)">delete</button>
  </li>
</template>

<script>
export default {
  // props: All custom attributes we want this component to accept
  // But here we are using emailAddress , not email-address as given in the template of App.vue?
  // Vue automatically translates variables defined below (camel casing) to kebab casing in html template behind the scene
  // In HTML Template, we always use kebab casing while in JS, we always use camel casing
  // We use props the same as data; so we should avoid name collision between data and props
  // Vue use Uni-directional data flow and thus props are supposed to be immutable
  // we should notify parent to mutable it instead we changing its value here
  // if we really need to change the props here, we can set a data prop with another name that does not collide with props
  // and change it as we want
  // e.g. data() {
  //   peopleName: this.name
  // }
  // then change the value of peopleName as we want
  // A. Basic form of setting props
  // props: ['name', 'emailAddress', 'phoneNumber'],
  // B. More complete version of props that supports validation
  // Supported types: String, Number, Boolean, Array, Object, Date, Function, Symbol
  // But type can also be any constructor function (built-in ones like Date or custom ones).
  // Ref: https://v3.vuejs.org/guide/component-props.html
  // For non-string values passed from template, we need to use v-bind for to allow dynamic props
  // e.g. :email-address="friends[0].email"
  // e.g.2 :isFavorite="true"
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      // We can also provide a function for detailed default value
      // type: String,
      // default: false,
      // default: function() {}
      // We can also set up validator with function to detail describe the behavior that returns true or false
      // validator: function(value) {
      //   return value === '1' || value === '0';
      // }
    },
  },
  // [Optional]We can document our custom events here since without this section, other collaborators will need to go through the code to find the this.$emit('toggle-favorite') and this reduces the readability
  // Not having this section won't affect the function of this.$emit('toggle-favorite') below
  // A. Basic form
  // emits: ['toggle-favorite']
  // B. Object form that allos us to do validation
  emits: {
    'toggle-favorite': function(id) {
      if (id) {
        return true;
      } else {
        console.warn('Id is missing!');
        return false;
      }
    },
    'delete-friend': {},
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // this.friendIsFavorite = !this.friendIsFavorite;
      // Built-in method that we can call from a child component and parent can listen to this event
      // to facilitate child-parent communication
      // The first argument is the name of custom event => naming convenion of event is Kebab case no matter where we use it
      // The second argument onwards are data you wish to pass to parent
      this.$emit('toggle-favorite', this.id);
    },
  },
};
</script>
