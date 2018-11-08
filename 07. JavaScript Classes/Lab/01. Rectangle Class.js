class RectangleClass {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
    // [this.width, this.height, this.color] = [width, height, color]; // Valid too
  }

  calcArea() {
    return this.width * this.height;
  }
}

let rect = new RectangleClass(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
