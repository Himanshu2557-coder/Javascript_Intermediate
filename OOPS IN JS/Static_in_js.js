class Product{
    static x = 10;

    constructor(name, price) {
        this.name = name;
        this.price = price;
        console.log(Product.x); // Accessing static property from constructor
    }

}
let p1 = new Product("Laptop", 1000);
Product.x = 20; // Modifying static property    
console.log(Product.x); // Accessing static property directly from class