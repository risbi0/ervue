<template>
  <main id="main-container" class="flex f-row">
    <template v-for="(valk, index) in guide">
      <Banner :name="valk.name" :acr="valk.acr"/>
      <Content :valk="valk" :index="index"/>
    </template>
  </main>
</template>

<script setup>
import guide from '../data/guide.json';
import Banner from './Banner.vue';
import Content from './Content.vue';
</script>

<style scoped>
main {
  background-color: var(--dark-tint);
}
#main-container {
  overflow-y: hidden;
}
</style>