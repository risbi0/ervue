import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import valks from './data/guide.json';

//highlight adjacent rows on hovering from merged cells
function highlightInvolvedRows(row, bool) {
  const mergeSize = parseInt(row.getAttribute('rowspan')) - 1;
  const cellIndex = row.parentNode.rowIndex;
  for (let i = cellIndex; i < cellIndex + mergeSize; i++) {
    if (bool) {
      row.parentNode.parentNode.children[i].classList.add('table-cell-hover');
      notedCell(row.parentNode.parentNode.children[i], 'noted', 'temp');
    } else {
      row.parentNode.parentNode.children[i].classList.remove('table-cell-hover');
      notedCell(row.parentNode.parentNode.children[i], 'temp', 'noted');
    }
  }
}
export function mergedCellOver(e) { highlightInvolvedRows(e.target, true) }
export function mergedCellOut(e) { highlightInvolvedRows(e.target, false) }
// higlight table row (including merged cells), on row hover
// since rows that have an adjacent merged cell and don't have the rowspan attribute won't highlight it
function highlightAdjacentMergedCell(row, bool) {
  // check if inner HTML only has 1 pair of td tags
  // in a 2 column table it has 2 td tags per row
  // meaning if a row has one less td tag it either has
  // a missing cell in the row, or a merged cell (this case)
  if (row.innerHTML.match(/<\/td>/g).length == 1 ||
    // for cells with .noted class
    (row.innerHTML.match(/"temp"|"noted"/) && !(row.innerHTML.includes('rowspan')))) {
    // get all rows of its parent table
    const parentChildren = row.parentNode.children;
    // iterate and check if row has a rowspan attribute in the cell of the 2nd column
    for (let i = 0; i < parentChildren.length; i++) {
      if (parentChildren[i].innerHTML.includes('rowspan')) {
        let j = parentChildren[i].children[0].hasAttribute('rowspan') ? 0 : 1;
        // get rowspan value
        const range = parseInt(parentChildren[i].children[j].getAttribute('rowspan')) - 1;
        // get index of selected row and merged cell
        const thisIndex = row.rowIndex;
        const mergedCellIndex = parentChildren[i].rowIndex;
        // check if index is covered within the range of merged cell
        if (thisIndex >= mergedCellIndex && thisIndex <= mergedCellIndex + range) {
          // apply styles
          if (bool) { parentChildren[i].children[j].classList.add('table-cell-hover'); }
          else { parentChildren[i].children[j].classList.remove('table-cell-hover'); }
        }
      }
    }
  }
}
function notedCell(row, removee, addee) {
  // .temp class to know which had the .noted class
  for (let i = 0; i < row.children.length; i++) {
    if (row.children[i].classList.contains(removee)) {
      row.children[i].classList.remove(removee);
      row.children[i].classList.add(addee);
    }
  }
}
export function rowOver(e) {
  let tr = e.target;
  // get row element from any descendant
  do { tr = tr.parentElement } while (tr.tagName != 'TR');
  tr.classList.add('table-cell-hover');
  notedCell(tr, 'noted', 'temp');
  highlightAdjacentMergedCell(tr, true);
}
export function rowOut(e) {
  let tr = e.target;
  do { tr = tr.parentElement } while (tr.tagName != 'TR');
  tr.classList.remove('table-cell-hover');
  notedCell(tr, 'temp', 'noted');
  highlightAdjacentMergedCell(tr, false);
}
// hide previously clicked tooltip
export function hidePrevTooltip(e) {
  const tooltipable = document.querySelectorAll('input');
  for (const otherItem of tooltipable) { if (otherItem != e.target) otherItem.checked = false }
}
export function isRowspan(item) { return /^[0-9]+$/.test(item); }
export const isMobile = (function(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) return true; else return false; })(navigator.userAgent||navigator.vendor||window.opera)
export let showCover = true;

window.onload = function() {
  // remove cover and apply main background image when loaded from about page and going to main page
  let aboutPath = '/ervue/About';
  const body = document.querySelector('body');
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation, index) {
      if (aboutPath != window.location.pathname &&
          document.getElementById('cover') != null &&
          index == 0) {
        document.getElementById('cover').remove();
        body.style.backgroundImage = 'url("/ervue/assets/bg.e4e2c642.png")';
        //body.style.backgroundImage = 'url("/ervue/src/assets/img/bg.png")';
      }
    });
  });
  const config = { childList: true, subtree: true };
  observer.observe(body, config);
  // loading screen setup
  const cover = document.getElementById('cover');
  const progressBar = document.getElementById('progress-bar');
  const progressBarWidthInPixels = parseInt(window.getComputedStyle(progressBar).width) + 1;
  const meter = document.getElementById('meter');
  const mainContainer = document.getElementById('main-container');
  const banners = document.querySelectorAll('.banner');
  const url = [];
  let done = 0, timeout = 0, progressInPixels = 0;
  // execute immediately
  //body.style.backgroundImage = 'url("/ervue/src/assets/img/bg.png")';
  body.style.backgroundImage = 'url("/ervue/assets/bg.e4e2c642.png")';
  banners.forEach(banner => { banner.style.opacity = 0 });
  showCover = false;
  // execute animation after all images are loaded
  function load(src) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener('load', resolve);
      image.addEventListener('error', reject);
      image.src = src;
    });
  }
  function fadeAnim(item, fade) {
    setTimeout(() => {
      item.style.opacity = 1;
      item.classList.add(fade);
    }, timeout);
    timeout += 100;
  }
  // insert main background image link and banner image links
  url.push(window.getComputedStyle(body).getPropertyValue('background-image').substring(5).slice(0,-2));
  banners.forEach(banner => {
    url.push(window.getComputedStyle(banner.children[0]).getPropertyValue('background-image').substring(5).slice(0,-2));
  });
  // wait for images to load
  url.forEach(link => {
    load(link).then(() => {
      done += 1;
      // progress bar
      const percentDone = Math.round(done / valks.length * 100) / 100;
      const fillPixels = Math.round(percentDone * progressBarWidthInPixels);
      while (meter.style.width != `${fillPixels}px`) {
        progressInPixels += 1;
        meter.style.width = `${progressInPixels}px`;
      }
      if (done == valks.length) { // start animation
        cover.classList.add('fade');
        setTimeout(() => { cover.remove() }, 800);
        document.querySelectorAll('header *').forEach(item => { item.classList.add('header-anim') });
        banners.forEach(item => {
          // fade-in-up/down animation, alternate on each successive button
          if (Array.prototype.indexOf.call(mainContainer.children, item) % 4 == 0) {
            fadeAnim(item, 'fade-in-up');
          } else {
            fadeAnim(item, 'fade-in-down');
          }
        });
      }
    });
  });
}

window.scrollTo({ top: 0 });

createApp(App).use(router).mount('#app');