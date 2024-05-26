<script setup lang="ts">

</script>

<template>
  <nav>
    <RouterLink to="/spinner">Spinner task</RouterLink>
    <RouterLink to="/child-parent">Child/parent task</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  padding: 20px;
}

a {
  display: block;
}

a:not(:first-child) {
  margin-top: 20px;
}
</style>