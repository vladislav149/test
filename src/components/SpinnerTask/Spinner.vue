<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';

const props = defineProps<{
  to?: string;
  fullscreen?: boolean;
  shouldCatchFocus?: boolean;
}>();

const lastActiveElement = ref<HTMLElement | null>(null);
const rootElementRef = ref<HTMLElement>();

function storeLastActiveElement() {
  lastActiveElement.value = document.activeElement as HTMLElement;
}

function catchFocus() {
  rootElementRef.value?.focus();
}

function restoreLastFocus() {
  lastActiveElement.value?.focus();
}

onMounted(() => {
  storeLastActiveElement();
  if (props.shouldCatchFocus)
    catchFocus();
});

onUnmounted(() => {
  restoreLastFocus();
});

const spinnerClasses = computed(() => ({
  'app-spinner--fullscreen': props.fullscreen,
}));
</script>

<template>
  <teleport v-if="props.to" :to="props.to">
    <div ref="rootElementRef" class="app-spinner" :class="spinnerClasses" tabindex="0" @focusout="catchFocus">
      <div class="app-spinner__overlay" />
      <div class="app-spinner__icon" />
    </div>
  </teleport>
  <div v-else ref="rootElementRef" class="app-spinner" :class="spinnerClasses" tabindex="0" @focusout="catchFocus">
    <div class="app-spinner__overlay" />
    <div class="app-spinner__icon" />
  </div>
</template>

<style>
.app-spinner {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  border-radius: inherit;
}

  .app-spinner:focus {
    outline: none;
  }

  .app-spinner__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    background-size: contain;
    animation: spinnerAnimation 1.6s infinite linear;
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E.spinner_5nOS%7Btransform-origin:center;animation:spinner_sEAn .75s infinite linear%7D@keyframes spinner_sEAn%7B100%25%7Btransform:rotate(360deg)%7D%7D%3C/style%3E%3Cpath d='M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z' opacity='.25'/%3E%3Cpath d='M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z' class='spinner_5nOS'/%3E%3C/svg%3E");
  }

  .app-spinner__overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: inherit;
  }

  .app-spinner--fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

@keyframes spinnerAnimation {
  0% {
    transform: translate(-50%, -50%) rotate(0);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
