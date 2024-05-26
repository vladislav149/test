<script setup>
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from 'vue';
import Child from './Child.vue';
import { log } from './log';

onBeforeMount(() => {log('parent onBeforeMount')});
onMounted(() => {log('parent onMounted')});
onBeforeUnmount(() => {log('parent onBeforeUnmount')});
onUnmounted(() => {log('parent onUnmounted')});
</script>

<template>
  <div>
    parents
    <Child />
  </div>
</template>
