<template>
  <form>
    <h2>Add User</h2>
    <div>
      <label>Name:</label>
      <input v-model="username" />
    </div>
    <div>
      <label>Age:</label>
      <input v-model="age" />
    </div>
    <button @click.prevent="addUser">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      age: '',
    };
  },
  methods: {
    addUser() {
      this.$emit('add-user', this.username, this.age);
    },
  },
};
</script>
