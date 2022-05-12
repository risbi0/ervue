<template>
  <div v-if="showCover" id="cover" class="flex fh-center fv-center pos-abs">
    <div id="progress-bar">
      <div id="meter"></div>
    </div>
  </div>
  <header class="flex fh-center fv-center f-col">
    <h1>Elysian Realm</h1>
    <p>Recommended Builds updated for v5.6</p>
    <div id="links">
      <router-link to="/ervue/About">About This Guide</router-link>
      <a href="https://rentry.org/ElysianRealm" target="_blank">Rentry Page</a>
    </div>
  </header>
  <Accordion/>
  <footer></footer>
  <button id="go-to-top" @click="goToTop" @mouseover="test">
    <span class="material-icons">keyboard_arrow_up</span>
  </button>
</template>

<script setup>
import Accordion from '../components/Accordion.vue';
import { isMobile, showCover } from '../main.js';

function goToTop() {
  const mainContainer = document.getElementById('main-container');
  const banners = document.querySelectorAll('.banner');

  for (const item of banners) {
    if (item.classList.contains('active')) {
      item.nextElementSibling.scroll({ top: 0, behavior: 'smooth' });
      // scroll into view
      let offsetLeft;
      if (isMobile) {
        offsetLeft = item.nextElementSibling.offsetLeft;
      } else {
        offsetLeft = item.nextElementSibling.offsetLeft - 100;
      }
      mainContainer.scroll({ left: offsetLeft, behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
#cover {
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: black;
}
#progress-bar {
  width: 50%;
  height: 5px;
  background-color: #222;
}
#meter {
  width: 0;
  height: 5px;
  background-color: gray;
  border-radius: 5px;
}
header {
  background-color: var(--dark-tint);
  flex-grow: 1;
}
@media only screen and (max-height: 1100px) {
  header {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
header p {
  margin: 20px auto 10px auto;
  font-style: italic;
}
header a {
  color: var(--white);
  font-size: 12px;
}
header a:nth-child(1) {
  margin-right: 5px;
}
header a:nth-child(2) {
  margin-left: 5px;
}
.header-anim {
  animation: headeranim 5s;
}
@keyframes headeranim {
  from { color: transparent; }
  to { color: var(--white); }
}
footer {
  flex-grow: 2;
  background: linear-gradient(0deg, rgba(0,0,0,0.75) 0%, rgb(0, 0, 0) 100%);
}
h1 {
  font-size: 4em;
  letter-spacing: 10px;
  text-align: center;
  text-transform: uppercase;
}
/* go-to-top button */
#go-to-top {
  visibility: hidden;
  position: fixed;
  cursor: pointer;
  bottom: 10px;
  right: 10px;
  border: none;
  border-radius: 50%;
  outline: none;
  background-color: rgb(60, 60, 60);
  color: rgba(255, 255, 255, 0.8);
  width: 50px;
  height: 50px;
  padding-top: 5px;
}
#go-to-top .material-icons {
  font-size: 35px;
}
#go-to-top:hover {
  background-color: rgba(60, 60, 60, 0.8);
}
</style>