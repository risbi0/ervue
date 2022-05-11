<template>
  <div class="guide-container flex fv-center f-col"
       @scroll="goToTopButton">
    <h2 class="in-name">{{ valk.name }}</h2>
    <p class="rating">{{ valk.rating }}</p>
    <Signets :signets="valk.signets"/>
    <Anchors :mainIndex="index"
             :count="valk.signetTable.length - 1"
             :hasNotes="'notes' in valk"/>
    <EmblemSupport :emblem="valk.emblem"
                   :support="valk.support"/>
    <ExclusiveSignets :table="valk.signetTable[0]"/>
    <SignetTables :mainIndex="index"
                  :signets="valk.signets"
                  :tables="valk.signetTable.slice(1)"/>
    <Notes v-if="'notes' in valk"
           :mainIndex="index"
           :notes="valk.notes"/>
  </div>
</template>

<script setup>
import Signets from './Signets.vue';
import Anchors from './Anchors.vue';
import EmblemSupport from './EmblemSupport.vue';
import SignetTables from './SignetTables.vue';
import ExclusiveSignets from './ExclusiveSignets.vue';
import Notes from './Notes.vue';

defineProps({
  valk: Object,
  index: Number
})

function goToTopButton(e) {
  const topButton = document.querySelector('#go-to-top');
  if (e.target.scrollTop > 700) {
    topButton.style.visibility = 'visible';
    if (window.innerWidth <= 600) topButton.style.top = window.innerHeight - 60 + "px";
  } else { topButton.style.visibility = 'hidden'; }
}
</script>

<style scoped>
.guide-container {
  scrollbar-color: transparent transparent !important;
  overflow-x: hidden;
  overflow-y: scroll;
  width: 0px;
  min-width: 0px;
  max-height: 790px;
  padding-top: 10px;
  opacity: 0;
}
.in-name {
  font-size: 40px;
  letter-spacing: 3px;
  text-align: center;
  margin-bottom: 10px;
}
.rating {
  font-style: italic;
  margin-bottom: 2px;
}
</style>