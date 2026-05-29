// Rectangle Class
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate area
  calculateArea() {
    return this._width * this._height;
  }
}

// Square Class inherits from Rectangle
class Square extends Rectangle {
  constructor(side) {
    // width and height are equal in a square
    super(side, side);
  }

  // Method to calculate perimeter
  calculatePerimeter() {
    return 4 * this.width;
  }
}

// Create Rectangle object
const rectangle = new Rectangle(10, 5);

console.log("Rectangle");
console.log("Width:", rectangle.width);
console.log("Height:", rectangle.height);
console.log("Area:", rectangle.calculateArea());

// Create Square object
const square = new Square(6);

console.log("\nSquare");
console.log("Side:", square.width);
console.log("Area:", square.calculateArea());
console.log("Perimeter:", square.calculatePerimeter());