<template>
  <button type="button" class="banner pos-rel">
    <div :id="acr"></div>
    <div class="main-name pos-abs">
      <span @click.self="accordionAnim"
            :id="acr + '-name'"
            class="vertical-text flex fh-center fv-center">
        {{ name.replace(/[:']/g, '') }}
      </span>
    </div>
  </button>
</template>

<script setup>
import valks from '../data/guide.json';

defineProps({
  name: String,
  acr: String
})

function collapse(content, previousOffset=null) {
  const mainContainer = content.parentElement;
  const guideContainer = content.nextElementSibling;
  let width, timeout, phoneOffset;
  
  if (guideContainer.style.minWidth) { // collapse
    guideContainer.style.minWidth = null;
    guideContainer.style.opacity = 0;
    guideContainer.style.transition = 'min-width 0.2s linear, opacity 0.1s';
    setTimeout(() => { guideContainer.scrollTop = 0 }, 100);
  } else { // expand
    if (window.innerWidth <= 600) width = window.innerWidth, timeout = 0, phoneOffset = 100;
    else { width = 600, timeout = 300, phoneOffset = 0; }

    guideContainer.style.minWidth = width + 'px';
    guideContainer.style.opacity = 1;
    guideContainer.style.transition = 'min-width 0.2s linear, opacity 0.7s 0.2s';
    
    let scrollOffset = content.offsetLeft;
    if (previousOffset < content.offsetLeft && mainContainer.scrollWidth != valks.length * 100) {
      scrollOffset -= width;
    }
    
    setTimeout(() => {
      // pixel by pixel scrolling for the rightmost banners covered by the viewport
      // since scrolling to a coordinate on the edge of the document with the accordion expanding
      // would not scroll at all, since the scroll method instantly goes to the assigned coordinates
      // before the accordion has finished expanding
      if (content.offsetLeft + 100 > mainContainer.scrollWidth - window.innerWidth &&
          window.innerWidth <= 600 && mainContainer.scrollWidth == valks.length * 100) { //todo
        const travelPixels = content.getBoundingClientRect().right;
        for (let i = 1; i <= travelPixels; i++) {
          setTimeout(() => {
            mainContainer.scroll({ left: scrollOffset + phoneOffset - travelPixels + i });
          }, i * 200 / travelPixels);
        }
      } else { // regular scroll
        mainContainer.scroll({
          left: scrollOffset + phoneOffset,
          behavior: 'smooth'
        });
      }
      if (window.innerWidth <= 600) {
        window.scroll({
          top: content.offsetTop,
          behavior: 'smooth'
        });
      }
    }, timeout);
  }
}
function accordionAnim(e) {
  const banners = document.querySelectorAll('.banner');
  const banner = e.target.parentElement.parentElement;
  let previousOffset;
  // collapse previously clicked item
  if (!banner.classList.contains('active')) {
    for (const coll of banners) {
      if (coll.classList.contains('active')) {
        previousOffset = coll.offsetLeft;
        coll.classList.remove('active');
        collapse(coll);
      }
    }
  }
  banner.classList.toggle('active');
  collapse(banner, previousOffset);
}
</script>

<style scoped>
.banner {
  display: inline-block;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  padding: 0;
}
.banner div:nth-child(1) {
  box-shadow: inset 0 -800px 800px -500px rgba(0, 0, 0, 0.8);
  background-size: cover;
  filter: brightness(35%);
  transition: 0.2s;
  height: 800px;
  width: 100px;
}
.banner:hover div:nth-child(1) {
  filter: brightness(70%);
  transition: 0.2s;
  color: white;
}
.main-name {
  transform: translateY(-100%);
  width: 100%;
  height: 100%;
}
.vertical-text {
  font-family: 'Raleway';
  writing-mode: vertical-lr;
  text-orientation: upright;
  text-transform: uppercase;
  letter-spacing: 8px;
  color: rgba(255, 255, 255, 0.7);
  width: 100%;
  height: 100%;
}
/* valk images */
#aka {
  background-image: url("../assets/img/valks/Argent_Knight_Artemis.png");
  background-position: 57%;
}
#bke {
  background-image: url("../assets/img/valks/Bright_Knight_Excelsis.png");
  background-position: 50%;
}
#carole {
  background-image: url("../assets/img/valks/Swwet_n_Spicy.png");
  background-position: 51.4%;
}
#da {
  background-image: url("../assets/img/valks/Dea_Anchora.png");
  background-position: 52.7%;
}
#elysia {
  background-image: url("../assets/img/valks/Miss_Pink_Elf.png");
  background-position: 52%;
}
#fr {
  background-image: url("../assets/img/valks/Fallen_Rosemary.png");
  background-position: 56.2%;
}
#fischl {
  background-image: url("../assets/img/valks/Prinzessin_der_Verurteilung.png");
  background-position: 57%;
}
#hofs {
  background-image: url("../assets/img/valks/Herrscher_of_Flamescion.png");
  background-position: 53.7%;
}
#hor {
  background-image: url("../assets/img/valks/Herrscher_of_Reason.png");
  background-position: 54.1%;
}
#hos {
  background-image: url("../assets/img/valks/Herrscher_of_Sentience.png");
  background-position: 51.2%;
}
#hot {
  background-image: url("../assets/img/valks/Herrscher_of_Thunder.png");
  background-position: 57%;
}
#lk {
  background-image: url("../assets/img/valks/Luna_Kindred.png");
  background-position: 44.8%;
}
#mobius {
  background-image: url("../assets/img/valks/Infinite_Ouroboros.png");
  background-position: 52.8%;
}
#nyx {
  background-image: url("../assets/img/valks/Starchasm_Nyx.png");
  background-position: 49.3%;
}
#pe {
  background-image: url("../assets/img/valks/Palatinus_Equinox.png");
  background-position: 48.76%;
}
#raven {
  background-image: url("../assets/img/valks/Midnight_Absinthe.png");
  background-position: 53.4%;
}
#rc {
  background-image: url("../assets/img/valks/Reverist_Calico.png");
  background-position: 56.4%;
}
#ri {
  background-image: url("../assets/img/valks/Ritual_Imayoh.png");
  background-position: 55%;
}
#sn {
  background-image: url("../assets/img/valks/Stygian_Nymph.png");
  background-position: 44.6%;
}
#spa {
  background-image: url("../assets/img/valks/Spina_Astera.png");
  background-position: 49.5%;
}
#stfu {
  background-image: url("../assets/img/valks/Striker_Fulminata.png");
  background-position: 61.8%;
}
#sw {
  background-image: url("../assets/img/valks/Silverwing_N-EX.png");
  background-position: 58.3%;
}
#tp {
  background-image: url("../assets/img/valks/Twilight_Paladin.png");
  background-position: 47.18%;
}
#vg {
  background-image: url("../assets/img/valks/Valkyrie_Gloria.png");
  background-position: 50%;
}
/* banner font sizes */
#fischl-name { font-size: 16px; }
#aka-name, #bke-name, #hofs-name, #hos-name { font-size: 20px; }
#hor-name, #hot-name, #stfu-name { font-size: 22px; }
#mobius-name, #raven-name { font-size: 25px; }
#fr-name, #pe-name { font-size: 28px; }
#rc-name, #elysia-name, #sw-name, #tp-name, #vg-name { font-size: 30px; }
#sn-name { font-size: 32px; }
#da-name, #lk-name, #nyx-name, #ri-name, #spa-name, #carole-name { font-size: 35px; }
</style>