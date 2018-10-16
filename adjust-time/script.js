function main() {
  let adj30 = new Adjuster({adjustToSeconds:30, name:'30s Adjuster'});
  let adj60 = new Adjuster({adjustToSeconds:60, name:'60s Adjuster'});

  let testVals = [0,1,10,15,25,30,35,55,60,61,75,89,90,145,-1,-30,-45,-60,-198,null];

  testVals.forEach(value => {
    adj30.adjust(value);
  });

  testVals.forEach(value => {
    adj60.adjust(value);
  });
}
window.onload = main;

// =====================================
class Adjuster extends window.BaseClass {
  constructor(properties={}) {
    super(properties);
    this.adjustToSeconds    = properties.adjustToSeconds;
  }
  adjust(seconds) {
    let fullFits            = ~~(seconds / this.adjustToSeconds);
    let remaining           = seconds % this.adjustToSeconds;
    // round up any remaining
    if (remaining) {
      fullFits              += remaining > 0 ? 1 : -1;
    }

    let adjusted            = fullFits * this.adjustToSeconds;

    this.log(`[${seconds}]s -> [${adjusted}]s`);
  }
}