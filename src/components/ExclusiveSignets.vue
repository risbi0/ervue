<template>
  <h3>Exclusive Signets</h3>
  <table class="exclusive-tbl">
    <thead>
      <tr>
        <th>Signet</th>
        <th>Priority</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="row in table">
        <tr @mouseover="rowOver" @mouseout="rowOut">
          <template v-for="(cell, index) in row">
            <td v-if="!isRowspan(cell)"
                :rowspan="((isRowspan(row[index + 1])) ? row[index + 1] : null)"
                v-on="isRowspan(row[index + 1]) ? {
                  mouseover: mergedCellOver,
                  mouseout: mergedCellOut
                } : {}">
              {{ (index == 0 ? 'Blessing of ' : '') + cell }}
            </td>
          </template>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script setup>
import { rowOver, rowOut, isRowspan, mergedCellOver, mergedCellOut } from '../main.js';

defineProps({
  table: Array
})
</script>

<style scoped>
.exclusive-tbl {
  width: 50%;
  min-width: 90%;
}
</style>