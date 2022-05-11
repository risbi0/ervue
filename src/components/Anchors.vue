<template>
  <div class="flex f-row">
    <div v-for="index in count + (hasNotes === true ? 1 : 0)"
         class="anchor flex fh-center fv-center pos-rel">
      {{ getAnchor(index, count, hasNotes)[0] }}
      <a :href="'#'+ getAnchor(index, count, hasNotes)[1] + mainIndex"
          @click="smoothScroll">
        <span class="link-spanner pos-abs"></span>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  mainIndex: Number,
  count: Number,
  hasNotes: Boolean
})

function getAnchor(index, count, hasNotes) {
  let letter, link;
  if (index == 1) [letter, link] = ['M', 'main-signets-'];
  if (index == 2) [letter, link] = ['S', 'secondary-signets-'];
  if (index == 3) [letter, link] = ['T', 'transitional-signets-'];
  if ((index == 4 && hasNotes) || index == 3 && count != 3) {
    [letter, link] = ['N', 'notes-'];
  }
  return [letter, link];
}
// anchor smooth scrolling
function smoothScroll(e) {
  e.preventDefault();
  document.querySelector(e.target.parentElement.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
}
</script>

<style scoped>
.anchor {
  width: 30px;
  height: 30px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(78, 78, 78, 0.2);
  font-family: 'Raleway';
  font-weight: bold;
  font-size: 20px;
  color: var(--white);
}
.anchor:hover {
  cursor: pointer;
  background-color: var(--white);
  color: black;
}
.link-spanner {
  width: 100%;
  height: 100%;
  transform: translate(-23px, -15px);
}
</style>