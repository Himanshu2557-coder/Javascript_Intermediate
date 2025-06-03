// =====================================================
// 🚀 FUNCTION CONSTRUCTORS IN JAVASCRIPT - 10 EXAMPLES
// =====================================================

// ✅ 1. Basic Constructor - Creating a simple object
function Car(brand, year) {
  this.brand = brand;  // Assign brand to the object
  this.year = year;    // Assign year to the object
}

const car1 = new Car("Toyota", 2020);
console.log("1. Car brand:", car1.brand); // Output: Toyota



// ✅ 2. Constructor with Method
function Dog(name) {
  this.name = name; 

  // Defining a method inside constructor (not recommended for performance, but okay for learning)
  this.bark = function() {
    return this.name + " says Woof!";
  };
}

const d = new Dog("Max");
console.log("2. Dog sound:", d.bark()); // Output: Max says Woof!



/* 
✅ 3. Using `this` to calculate values dynamically
This constructor creates a rectangle and calculates area.
*/
function Rectangle(w, h) {
  this.width = w;
  this.height = h;

  this.area = function() {
    return this.width * this.height;
  };
}

const rect = new Rectangle(5, 3);
console.log("3. Rectangle area:", rect.area()); // Output: 15



// ✅ 4. Constructor with Default Parameters (ES6 default args)
function Book(title = "Untitled", pages = 100) {
  this.title = title;
  this.pages = pages;
}

const b = new Book(); // No arguments passed, defaults are used
console.log("4. Book title:", b.title); // Output: Untitled



// ✅ 5. Constructor with Conditional Logic
function User(username, isAdmin) {
  this.username = username;
  this.role = isAdmin ? "Admin" : "User"; // Role based on boolean
}

const user1 = new User("john_doe", false);
console.log("5. User role:", user1.role); // Output: User



// ✅ 6. Reusing Constructor Logic via Call
function Animal(name) {
  this.name = name;
}

function Cat(name, color) {
  Animal.call(this, name);  // Call parent constructor
  this.color = color;
}

const kitty = new Cat("Luna", "Black");
console.log("6. Cat name and color:", kitty.name, kitty.color); // Output: Luna Black



// ✅ 7. Creating a Constructor that Builds from Array Input
function Student(details) {
  this.name = details[0];
  this.grade = details[1];
}

const s1 = new Student(["Alex", "A+"]);
console.log("7. Student grade:", s1.grade); // Output: A+



// ✅ 8. Adding Prototype Methods (recommended for shared methods)
function Circle(radius) {
  this.radius = radius;
}

// Add method outside using prototype (shared across all objects)
Circle.prototype.area = function() {
  return Math.PI * this.radius * this.radius;
};

const c1 = new Circle(4);
console.log("8. Circle area:", c1.area().toFixed(2)); // Output: 50.27



// ✅ 9. Constructor with Object Inside (composition)
function Laptop(brand, specs) {
  this.brand = brand;
  this.specs = {
    ram: specs.ram,
    cpu: specs.cpu
  };
}

const lap = new Laptop("Dell", { ram: "16GB", cpu: "i7" });
console.log("9. Laptop CPU:", lap.specs.cpu); // Output: i7



// ✅ 10. Constructor with Chained Methods (fluent interface)
function Counter(start) {
  this.count = start;

  this.increment = function() {
    this.count++;
    return this; // return this for chaining
  };

  this.decrement = function() {
    this.count--;
    return this;
  };

  this.show = function() {
    console.log("10. Counter value:", this.count);
    return this;
  };
}

const counter = new Counter(0);
counter.increment().increment().decrement().show(); // Output: 1

// | Concept              | Description                                         |
// | -------------------- | --------------------------------------------------- |
// | `this`               | Refers to the new object created with `new` keyword |
// | Default Parameters   | ES6 feature for default values in functions         |
// | Prototype            | Efficient way to define shared methods              |
// | Composition          | Object within another object                        |
// | Chaining             | Returning `this` allows method chaining             |
// | Reuse with `.call()` | Reuse logic from another constructor                |
