<template>
  <h1>A single user, with ID: {{ $route.params.id }}</h1>
</template>
<script>
export default {
  setup() {},
};
/* 
  A) Naming with underscore
  Nuxt allows setting up the route config via folder structure directly
  any file named with a underscore ("_") prefix will be treated as dynamic file that upon user input a value
  it will be loaded and able to be retrieved via vue-router
  
  B) Vue Router
  By default vue-router is already inside Nuxt
  - $route to make use of it
  - $route.params gives you access of dynamic parameters input by user
*/
</script>
