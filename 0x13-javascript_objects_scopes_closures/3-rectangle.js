#!/usr/bin/node
module.exports = class Rectangle {
  constructor (w, h) {
    // If w or h is equal to 0 or not a positive integer, create empty object
    if (w > 1 && h > 1) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        process.stdout.write('X');
      }
      if (i < this.width - 1) { process.stdout.write('\n'); }
    }
  }
};
