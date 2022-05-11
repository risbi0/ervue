<template>
  <div class="emblem-support flex fh-center">
    <Emblem :emblem="emblem"/>
    <Support :support="support"/>
  </div>
</template>

<script setup>
import Emblem from "./Emblem.vue";
import Support from "./Support.vue";

defineProps({
  emblem: Array,
  support: Array
})
</script>

<style scoped>
.emblem-support {
  justify-content: space-between;
  width: 90%;
}
@media only screen and (max-width: 400px) {
  .emblem-support { flex-direction: column; }
}
</style>