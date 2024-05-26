<script setup>
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from 'vue';
import { log } from './log';

onBeforeMount(() => {log('children onBeforeMount')});
onMounted(() => {log('children onMounted')});
onBeforeUnmount(() => {log('children onBeforeUnmount')});
onUnmounted(() => {log('children onUnmounted')});
</script>

<template>
  <div>
    child
  </div>
</template>
