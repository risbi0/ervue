<template>
  <div :id="'notes-' + mainIndex" class="notes">
    Notes:<br><br>
    <span v-html="notes"></span>
  </div>
</template>

<script setup>
defineProps({
  mainIndex: Number,
  notes: String
})
</script>