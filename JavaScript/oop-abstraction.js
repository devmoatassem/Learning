// OOP Principles: Abstraction

// An abstraction is about extracting the concept of what you're trying to do, rather than dealing with a specific manifestation of that concept. 

// Encapsulation is about you not having access to, or not being concerned with, how some implementation works internally.

// Example
class Shape {
    constructor() {
      if (new.target === Shape) {
        throw new Error("Shape is an abstract class and cannot be instantiated.");
      }
    }
  
    area() {
      throw new Error("Subclasses must implement the 'area' method.");
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius ** 2;
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  // Create instances of Circle and Rectangle
  const circle = new Circle(5);
  const rectangle = new Rectangle(4, 6);
  
  console.log("Circle Area:", circle.area());       // Output: Circle Area: 78.53981633974483
  console.log("Rectangle Area:", rectangle.area()); // Output: Rectangle Area: 24
  


//   In this example, the Shape class serves as an abstraction, defining a common interface for calculating the area of various shapes. The Circle and Rectangle classes are concrete implementations of shapes that inherit from the abstract Shape class. Each subclass provides its own implementation of the area method, which is a specific behavior related to the shape.

// Abstraction allows you to work with high-level concepts (shapes in this case) without worrying about the specific details of how the area calculation is done for each shape. This promotes modularization and simplifies code maintenance.