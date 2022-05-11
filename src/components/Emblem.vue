<template>
  <div class="emblem flex fh-center">
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th colspan="2">Emblem</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(array, index) in emblem">
          <tr @mouseover="rowOver" @mouseout="rowOut">
            <td>{{ emblemTableTimeColumn[index] }} </td>
            <template v-for="emb in array">
              <td class="pos-rel">
                <div :class="'pic ' + getEmblemAcr(emb)"></div>
                <label class="tooltip flex fh-center pos-abs">
                  <input @click="hidePrevTooltip" type="checkbox" class="pos-abs">
                  <span class="pos-abs">{{ emb }}</span>
                </label>
              </td>
              <td v-if="array.length == 1"></td>
            </template>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { rowOver, rowOut, hidePrevTooltip } from '../main.js';

defineProps({ emblem: Array })

const emblemTableTimeColumn = ['Early', 'Mid', 'Late'];

function getEmblemAcr(name) {
  let acr;
  switch (name) {
    case 'Because of You':          acr = 'boy';   break;
    case 'Boundless Logos':         acr = 'bl';    break;
    case 'Burden':                  acr = 'b';     break;
    case 'Dreamful Gold':           acr = 'dg';    break;
    case 'Empty Like Shala':        acr = 'els';   break;
    case 'Falling in Past Light':   acr = 'fipl';  break;
    case 'Forbidden Seed':          acr = 'fs';    break;
    case 'Forget-Me-Not':           acr = 'fmt';   break;
    case 'Gold Goblet':             acr = 'gg';    break;
    case 'Grey-scale Rainbow':      acr = 'gsr';   break;
    case 'Home Lost':               acr = 'hl';    break;
    case 'It Will Be Written':      acr = 'iwbw';  break;
    case 'Light as a Bodhi Leaf':   acr = 'laabl'; break;
    case 'Mad King\'s Mask':        acr = 'mkm';   break;
    case 'Memory':                  acr = 'm';     break;
    case 'Resolve':                 acr = 'r';     break;
    case 'Stained Sakura':          acr = 'sts';   break;
    case 'The First Scale':         acr = 'tfs';   break;
    case 'Thorny Crown':            acr = 'tc';    break;
  }
  return acr;
}
</script>

<style scoped>
.emblem { width: 40%; }
@media only screen and (max-width: 400px) {
  .emblem { width: 100% !important; }
}
.emblem table { width: 100%; }
.emblem table td:nth-child(2),
.emblem table td:nth-child(3) {
  width: 50px;
  font-size: 10px;
}
.emblem td:nth-child(n+2):nth-child(-n+3) {
  color: transparent;
  transition: 0.3s ease;
}
.emblem td:nth-child(n+2):nth-child(-n+3):hover {
  color: var(--white);
  transition: 0.2s ease-in;
}
/* emblem images */
.boy    { background-image: url("../assets/img/emblems/Because_of_You.png"); }
.bl     { background-image: url("../assets/img/emblems/Boundless_Logos.png"); }
.b      { background-image: url("../assets/img/emblems/Burden.png"); }
.dg     { background-image: url("../assets/img/emblems/Dreamful_Gold.png"); }
.els    { background-image: url("../assets/img/emblems/Empty_Like_Shala.png"); }
.fipl   { background-image: url("../assets/img/emblems/Falling_in_Past_Light.png"); }
.fs     { background-image: url("../assets/img/emblems/Forbidden_Seed.png"); }
.fmt    { background-image: url("../assets/img/emblems/Forget_Me_Not.png"); }
.gg     { background-image: url("../assets/img/emblems/Gold_Goblet.png"); }
.gsr    { background-image: url("../assets/img/emblems/Grey_Scale_Rainbow.png"); }
.hl     { background-image: url("../assets/img/emblems/Home_Lost.png"); }
.iwbw   { background-image: url("../assets/img/emblems/It_Will_Be_Written.png"); }
.laabl  { background-image: url("../assets/img/emblems/Light_as_a_Bodhi_Leaf.png"); }
.mkm    { background-image: url("../assets/img/emblems/Mad_Kings_Mask.png"); }
.m      { background-image: url("../assets/img/emblems/Memory.png"); }
.r      { background-image: url("../assets/img/emblems/Resolve.png"); }
.sts    { background-image: url("../assets/img/emblems/Stained_Sakura.png"); }
.tfs    { background-image: url("../assets/img/emblems/The_First_Scale.png"); }
.tc     { background-image: url("../assets/img/emblems/Thorny_Crown.png"); }
</style>