<template>
  <div class="supp flex fh-center">
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th colspan="4">Supports</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(array, index) in support">
          <tr @mouseover="rowOver" @mouseout="rowOut">
            <td>{{ supportTableTypeColumn[index] }}</td>
            <template v-for="subArray in array">
              <template v-for="supp in subArray">
                <td class="pos-rel" :colspan="getColspan(subArray)">
                  <div :class="'pic ' + getSuppAcr(supp)"></div>
                  <label @click="hidePrevTooltip" class="tooltip flex fh-center pos-abs">
                    <p>{{ getSuppAcr(supp).toUpperCase() }}</p>
                    <input @mouseover="suppOver" @mouseout="suppOut"
                           type="checkbox" class="pos-abs">
                    <span class="pos-abs">{{ supp }}</span>
                  </label>
                </td>
              </template>
            </template>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { rowOver, rowOut, hidePrevTooltip } from '../main.js';

defineProps({ support: Array })

const supportTableTypeColumn = ['Utility', 'Damage'];

function getColspan(array) { return array.length == 1 ? 2 : 1;  }
function getSuppAcr(name) {
  let acr;
  switch (name) {
    case 'Azure Empyrea':               acr = 'ae';  break;
    case 'Bright Knight: Excelsis':     acr = 'bke'; break;
    case 'Blood Rose':                  acr = 'br';  break;
    case 'Divine Prayer':               acr = 'dp';  break;
    case 'Haxxor Bunny':                acr = 'hb';  break;
    case 'Lightning Empress':           acr = 'le';  break;
    case 'Midnight Absinthe':           acr = 'ma';  break;
    case 'Reverist Calico':             acr = 'rc';  break;
    case 'Snowy Sniper':                acr = 'ss';  break;
    case 'Valkyrie Chariot':            acr = 'vc';  break;
    case 'Vermillion Knight: Eclipse':  acr = 'vke'; break;
  }
  return acr;
}
// support valk avatar transition on hover
function suppOver(e) {
  e.target.parentNode.previousElementSibling.style.filter = 'brightness(50%)';
  e.target.parentNode.previousElementSibling.style.transition = '0.3s';
}function suppOut(e) {
  e.target.parentNode.previousElementSibling.style.filter = 'unset';
  e.target.parentNode.previousElementSibling.style.transition = '0.2s';
}
</script>

<style scoped>
.supp {
  width: 55%;
  height: 150px;
}
@media only screen and (max-width: 400px) {
  .supp { width: 100% !important; }
}
.supp table { width: 100%; }
.supp td:nth-child(n+2):nth-child(-n+5) {
  color: transparent;
  transition: 0.3s ease;
}
.supp td:nth-child(n+2):nth-child(-n+5):hover {
  color: var(--white);
  transition: 0.2s ease-in;
}
/* valk support images */
.ae    { background-image: url("../assets/img/avatars/Azure_Empyrea_Avatar.png"); }
.bke   { background-image: url("../assets/img/avatars/Bright_Knight_Excelsis_Avatar.png"); }
.br    { background-image: url("../assets/img/avatars/Blood_Rose_Avatar.png"); }
.dp    { background-image: url("../assets/img/avatars/Divine_Prayer_Avatar.png"); }
.hb    { background-image: url("../assets/img/avatars/Haxxor_Bunny_Avatar.png"); }
.le    { background-image: url("../assets/img/avatars/Lightning_Empress_Avatar.png"); }
.ma    { background-image: url("../assets/img/avatars/Midnight_Absinthe_Avatar.png"); }
.rc    { background-image: url("../assets/img/avatars/Reverist_Calico_Avatar.png"); }
.ss    { background-image: url("../assets/img/avatars/Snowy_Sniper_Avatar.png"); }
.vc    { background-image: url("../assets/img/avatars/Valkyrie_Chariot_Avatar.png"); }
</style>