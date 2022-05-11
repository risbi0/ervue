<template>
  <template v-for="(table, index) in tables">
    <h3 :id="tableTitle[index].toLowerCase() + '-signets-' + mainIndex">
      {{ tableTitle[index] + ' Signets' }}
    </h3>
    <div class="rec-signets flex f-row">
      <template v-for="signet in signets[index]">
        <div :class="'signet sig-sep flex fv-center f-col ' + signet.sname">
          <label>{{ signet.series }}</label>
        </div>
      </template>
    </div>
    <table :class="tableTitle[index].toLowerCase() + '-tbl'">
      <thead>
        <tr>
          <th>Owner</th>
          <th>Signet</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="row in table">
          <tr @mouseover="rowOver" @mouseout="rowOut">
            <template v-for="(cell, index) in row">
              <td v-if="notRowspanAndNotes(cell)"
                  :rowspan="getRowspan(row[index + 1])"
                  :class="isNoted(row[index + 1])"
                  @mouseover="event => isRowspan(row[index + 1]) && mergedCellOver(event)"
                  @mouseout="event => isRowspan(row[index + 1]) && mergedCellOut(event)"
                  v-on="isMobile ? {
                    mouseover: nameToSummMobile
                  } : {
                    mouseover: nameToSummDesktopOver,
                    mouseout: nameToSummDesktopOut
                  }">
                {{ cell }}
              </td>
            </template>
          </tr>
        </template>
      </tbody>
    </table>
  </template>
</template>

<script setup>
import { isMobile, mergedCellOver, mergedCellOut,
         rowOver, rowOut, isRowspan } from '../main.js';
import signetSummary from '../data/summary.json';

defineProps({
  mainIndex: Number,
  signets: Array,
  tables: Array
})

const tableTitle = ['Main', 'Secondary', 'Transitional'];
let originalText = null, previousText;

function notRowspanAndNotes(cell) { return !isRowspan(cell) && cell != ''; }
function getRowspan(next) { return isRowspan(next) ? next : null; }
function isNoted(next) { return next == '' ? 'noted' : null; }
// change signet name to summary on hover/click
function changeText(targ) {
  for(let i = 0; i < Object.keys(signetSummary).length; i++) {
    if (signetSummary[i].signets.includes(targ.textContent) ||
        signetSummary[i].signets == targ.textContent) {
      previousText = targ;
      originalText = targ.textContent;
      targ.textContent = signetSummary[i].summary;
    }
  }
}
function revertText(targ) {
  if (originalText != null) {
    targ.textContent = originalText;
    originalText = null;
  }
}
function nameToSummMobile(e) {
  if (originalText != null && previousText != e.target) {
    revertText(previousText);
    changeText(e.target);
  } else if (originalText == null) { changeText(e.target);
  } else if (previousText == e.target) { revertText(previousText); }
}
function nameToSummDesktopOver(e) { changeText(e.target); }
function nameToSummDesktopOut(e) { if (originalText != null) revertText(e.target); }
</script>

<style scoped>
.sig-sep {
  width: 40px;
  height: 40px;
}
.main-tbl,
.secondary-tbl,
.transitional-tbl {
  width: 50%;
  min-width: 90%;
}
.main-tbl th:nth-child(1),
.secondary-tbl th:nth-child(1),
.transitional-tbl th:nth-child(1) {
  width: 20%;
}
.noted {
  background-color: rgba(70, 70, 70, 0.5);
}
</style>