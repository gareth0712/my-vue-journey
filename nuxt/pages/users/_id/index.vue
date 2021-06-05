<template>
  <div>This is user {{ $route.params.id }}</div>
</template>

<script>
export default {
  validate(data) {
    return /^\d+$/.test(data.params.id);
  },
  layout: 'users',
};
</script>
