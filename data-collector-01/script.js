// set up a base reporter
let reporter  = new BaseClass({name:'reporter'});
let dtc       = new DataCollector();

/**
 * Example data structure
 
  data : {
    'pages'   : {
      data : []     // sparse array using timestamp as index
    },
    'clicks'  : {
      data : []     // sparse array using timestamp as index
    },
  }
 */


function main() {
  addListeners();
  dtc.record('functions', 'main');
  reporter.log('we are listening');
}
function addListeners() {
  dtc.record('functions', 'hdlMouseDown');
  window.addEventListener('mousedown', hdlMouseDown);
  window.addEventListener('mouseup', hdlMouseUp);

  document.querySelector('#check__track-mouse').addEventListener('change', hdlTrackMouseMoveChanges)
}
function hdlMouseDown(/*ev*/) {
  dtc.record('functions', 'hdlMouseDown');
  dtc.record('mouseDown');
}
function hdlMouseUp(/*ev*/) {
  dtc.record('functions', 'hdlMouseUp');
  dtc.record('mouseUp');
}
function hdlMouseMove(/*ev*/) {
  dtc.record('functions', 'hdlMouseMove');
  dtc.record('mouseMove');
}
function hdlTrackMouseMoveChanges(ev) {
  dtc.record('functions', 'hdlTrackMouseMoveChanges');
  if (ev.target.checked) {
    addMouseMoveListener();
  }
  
  else {
    removeMouseMoveListener();
  }
}
function addMouseMoveListener() {
  dtc.record('functions', 'addMouseMoveListener');
  window.addEventListener('mousemove', hdlMouseMove);
}
function removeMouseMoveListener() {
  dtc.record('functions', 'removeMouseMoveListener');
  window.removeEventListener('mousemove', hdlMouseMove);
}
window.onload = main;
