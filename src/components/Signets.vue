<template>
  <div class="rec-signets flex f-row">
    <template v-for="array in signets">
      <template v-for="signet in array">
        <div :class="'signet sig-tog flex fh-center fv-center ' + signet.sname"></div>
      </template>
    </template>
  </div>
</template>

<script setup>
defineProps({
  signets: Array
})
</script>

<style scoped>
.sig-tog {
  width: 32px;
  height: 32px;
}
</style>