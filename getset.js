// Example 1: Using a getter and a setter in a class
class Circle {
  constructor(radius) {
    // The underscore prefix is a convention in JavaScript to indicate that a property is intended to be private.
    // It's not enforced by the language, but it's a way to signal to other developers that this property should not be accessed directly.
    this._radius = radius;
  }

  // The get keyword is used to define a getter method, which is called when the property is accessed.
  // In this case, the getter simply returns the value of the _radius property.
  get radius() {
    return this._radius;
  }

  // The set keyword is used to define a setter method, which is called when the property is assigned a new value.
  // In this case, the setter checks if the new value is negative, and if so, throws an error.
  // Otherwise, it updates the value of the _radius property.
  set radius(newRadius) {
    if (newRadius < 0) {
      throw new Error("Radius cannot be negative");
    }
    this._radius = newRadius;
  }
}

let circle = new Circle(5);
console.log(circle.radius); // outputs 5
circle.radius = 10;
console.log(circle.radius); // outputs 10
circle.radius = -1; // throws an error

// Using getters and setters instead of normal methods provides a few benefits:
// 1. Encapsulation: By using getters and setters, we can control access to the internal state of the object.
// 2. Validation: We can add validation logic to the setter to ensure that the property is assigned a valid value.
// 3. Flexibility: We can change the internal implementation of the getter and setter without affecting the external interface.

// In Python and Java, you would typically use normal methods to achieve similar functionality.
// However, in JavaScript, the get and set keywords provide a more concise and expressive way to define getters and setters.

