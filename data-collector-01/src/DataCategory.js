class DataCategory {
  constructor (key) {
    this.key              = key;
    this.data             = [];   // sparse array of DataRecord(s)
  }
  add(value, payload) {
    let index             = performance.now();
    let data              = (payload === undefined) ? {value} : {value, payload};

    if (this.data[index]) {
      index             = performance.now();
    }

    // ALREADY HAS DATA HERE
    if (this.data[index]) {
      this.data[index].push(data);
    }

    // FIRST DATA FOR THIS INDEX
    else {
      this.data[index]      = [data];
    }
  }
  get length() {
    return Object.keys(this.data).length;
  }
}