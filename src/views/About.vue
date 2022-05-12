<template>
  <div id="bg">
    <div id="container" class="flex fh-center fv-center">
      <div id="sub-container">
        <h1>About This Guide</h1><hr><br>
        <p>Status: <strong>UPDATED</strong> with the current Rentry page.</p><br>
        <p>This site serves as a guide as to what build it recommends for each battlesuit in Elysian Realm, including emblems, support battlesuits, and signets. This guide is based from the <a href="https://rentry.org/ElysianRealm" target="_blank">ER guide</a> made by medbae#6969.</p><br>
        <p>Each battlesuit has a rated difficulty in which it is the highest difficulty to practically clear on. For reference here are the difficulties included in this guide and its relevant rewards on full clear:</p><br>
        <div style="overflow-x: auto;">
          <table>
            <tr>
              <td colspan="2">Difficulty</td>
              <td>Inferno</td>
              <td>Abstinence</td>
              <td>Corruption</td>
            </tr>
            <tr>
              <td rowspan="4">
                <div class="flex fh-center fv-center" style="width: 25px;">
                  <div class="sideways">Weekly Rewards</div>
                </div>
              </td>
              <td>Crystals</td>
              <td>360</td>
              <td colspan="2">500</td>
            </tr>
            <tr>
              <td>Spatial Convectron</td>
              <td colspan="3">10</td>
            </tr>
            <tr>
              <td>Einstein's Torus</td>
              <td colspan="3">10</td>
            </tr>
            <tr>
              <td>Wafer Stabilizer</td>
              <td>30</td>
              <td colspan="2">40</td>
            </tr>
            <tr>
              <td rowspan="4">
                <div class="flex fh-center fv-center" style="width: 25px;">
                  <div class="sideways">Clearing Rewards</div>
                </div>
              </td>
              <td>Rusted Insignia</td>
              <td>235</td>
              <td>295</td>
              <td>300</td>
            </tr>
            <tr>
              <td>Memory Fragment</td>
              <td>315</td>
              <td>345</td>
              <td>350</td>
            </tr>
            <tr>
              <td>Stone of Choice</td>
              <td>50</td>
              <td colspan="2">55</td>
            </tr>
            <tr>
              <td>Dying Kindling</td>
              <td>310</td>
              <td>320</td>
              <td>330</td>
            </tr>
          </table>
        </div><br>
        <p>Abstinence and Corruption gives all the weekly rewards. Inferno unlocks all the rank up stamps in the Elysian shop for its respective battlesuit.</p><br>
        <p>Support battlesuits are classified into 2 types - utility and damage. Utility is usually for early game and damage type for late game.</p><br>
        <p>Exclusive signets are listed with its respective priorities. Start is the starting signet/s that should be picked from the start. 1st and 2nd are the signets next in line. Filler is when all exclusive signets with the mentioned priorities are already picked. "No" priority is just don't pick it. Reinforcement is select that one after the main signets are obtained.</p><br>
        <p>Regular and nexus signets are grouped into 3 types - main, secondary, and transitional. All battlesuits in this guide have main and secondary signets while some additionally have transitional signets.</p><br>
        <ul>
          <li>Main signets, as its name implies, are the most important for the run to be cleared.</li>
          <li>Secondary signets are picked after completing the main signets. Pick as many as possible.</li>
          <li>Transitional signets are picked before main signets. They give a fast increase in damage to get double rewards in 4F and beat 8F. After getting these signets, enter Phyllis' Shop to replace the emblem with one of the emblems of the main signets.</li>
        </ul>
        <p>The guide only shows the key signets to be picked. If there aren't enough signets shown to unlock the core signet (if suggested), usually pick the signets that increase damage dealt, physical or elemental damage dealt (depending on the battlesuit type) and damage taken by the enemies.</p><br>
        <p>The letters just below the signets displayed at the top are anchors for its respective section. The "M" letter is for the main signets, "S" for secondary signets, "T" for transitional, and "N" for the notes section.</p><br>
        <p>Signets that have a grayish tint to it have conditions or situations for it to be picked. They have notes related to it at the bottom of the guide. Other notes may include conditions for stage effects, alternate signets, or notes for the entire signet series in general. So it's best to check the notes section of the guide (if there is one), to get the full picture.</p><br>
        <h2>Credits</h2><hr>
        <p>medbae#6969 - guide owner</p>
        <p>Risbiantotri#9712 - website creator</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar-track { background-color: transparent; }
#bg {
  background-image: url("../assets/img/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
}
#container { background-color: var(--dark-tint); }
#sub-container {
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  width: 600px;
  max-width: 90%;
  height: 95vh;
  padding: 0 20px 0 20px;
  scrollbar-color: rgb(40, 40, 40) transparent !important;
  height: 100vh;
  overflow-y: auto;
}
@media only screen and (max-width: 640px) {
  #sub-container {
    width: auto;
    height: unset;
    overflow-y: unset;
  }
  #sub-container { height: initial; }
}
h1 { font-size: 30px; }
h2 { font-size: 24px; }
hr, a { color: var(--white); }
p, li { line-height: 1.2; }
table { margin: auto; }
table td {
  border: 1px solid var(--white);
}
tr:nth-child(1) td {
  width: 20%;
  vertical-align: middle;
}
.sideways {
  writing-mode: vertical-lr;
  transform: rotate(180deg);
}
</style>