<template>
  <form>
    <h2>Update User Information</h2>
    <div>
      <label>Name:</label>
      <input v-model="username" />
    </div>
    <div>
      <label>Age:</label>
      <input v-model="age" />
    </div>
    <button @click.prevent="updateUser">Update</button>
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
    updateUser() {
      this.$emit('update-user', this.username, this.age);
    },
  },
};
</script>
