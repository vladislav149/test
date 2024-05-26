<script setup lang="ts">
import Spinner from './Spinner.vue'
import {fetchPosts} from './api.ts'

/**
 * При загрузке страницы нужно запросить посты
 * Пока загружаются посты должен отображаться spinner
 * поход в сеть за постами может сломаться это нужно обработать
 * после того, как загрузились посты должна появиться (и больше не исчезать) кнопка обновить посты, которая будет обновлять список постов
 * данные по постам нужно отобразить на странице
 * если останется время - для постов нужно сделать отдельный компонент
 * для каждого поста нужно реализовать кнопку удаления
 */
</script>

<template>
  <div class="page">
    <router-link to="/">Назад</router-link>
    <button>Обновить посты</button>
    <Spinner />
  </div>
</template>

<style scoped>
a {
  display: block;
  margin-bottom: 20px;
}

.page {
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 20px;
}
</style>
