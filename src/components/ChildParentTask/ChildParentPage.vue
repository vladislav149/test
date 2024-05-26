<script setup>
import { ref } from 'vue'
import Parent from './Parent.vue';

const shouldShowParent = ref(false);
</script>

<template>
  <div class="page">
    <RouterLink to="/">Назад</RouterLink>
    <button @click="shouldShowParent = !shouldShowParent">Переключить</button>
    <Parent v-if="shouldShowParent"/>
  </div>
</template>

<style scoped>
.page {
  padding: 20px;
}

a {
  display: block;
  margin-bottom: 20px;
}
</style>