<template>
  <div class="header">
    <ul class="nav-items">
      <li>
        <nuxt-link to="/beginner">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/beginner/users">Users</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/beginner/products">Products</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
}

.nav-items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;

  a {
    text-decoration: none;
    color: #000;

    &:hover {
      color: #fff;
    }

    &:active {
      color: red;
    }
  }
}
</style>
