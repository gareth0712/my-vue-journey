<template>
  <form>
    <h2>Add New Friends</h2>
    <div>
      <label>name:</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label>Email Address:</label>
      <input type="email" v-model="emailAddress" />
    </div>
    <div>
      <label>Phone Number:</label>
      <input type="tel" v-model="phoneNumber" />
    </div>
    <button @click.prevent="addNewFriend">Submit</button>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      emailAddress: '',
      phoneNumber: '',
      errorMessage: '',
    };
  },
  emits: {
    'add-new-friend': (name, emailAddress, phoneNumber) => {
      if (name && emailAddress && phoneNumber) {
        return true;
      } else {
        console.warn(
          'Make sure name, email address and phone number fields are not empty'
        );
        return false;
      }
    },
  },
  methods: {
    addNewFriend() {
      if (this.name && this.emailAddress && this.phoneNumber) {
        this.errorMessage = '';
        this.$emit(
          'add-new-friend',
          this.name,
          this.emailAddress,
          this.phoneNumber
        );
      } else {
        this.errorMessage =
          'Please ensure name, email address and phone number are not empty';
      }
    },
  },
};
</script>

<style>
.error-message {
  color: red;
}
</style>
