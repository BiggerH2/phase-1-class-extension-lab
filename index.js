// Your code here// Define the Polygon class
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  // Getter method to count the number of sides
  get countSides() {
    return this.sides.length;
  }

  // Getter method to calculate the perimeter
  get perimeter() {
    return this.sides.reduce((acc, side) => acc + side, 0);
  }
}

// Define the Triangle class inheriting from Polygon
class Triangle extends Polygon {
  // Inherits countSides and perimeter from Polygon

  // Getter method to check if the sides form a valid triangle
  get isValid() {
    if (this.countSides !== 3) return false;
    const [a, b, c] = this.sides;
    return a + b > c && a + c > b && b + c > a;
  }
}

// Define the Square class inheriting from Polygon
class Square extends Polygon {
  // Inherits countSides and perimeter from Polygon

  // Getter method to check if the sides form a valid square
  get isValid() {
    if (this.countSides !== 4) return false;
    const [a, b, c, d] = this.sides;
    return a === b && b === c && c === d;
  }

  // Getter method to calculate the area of the square
  get area() {
    return this.sides[0] ** 2;
  }
}
