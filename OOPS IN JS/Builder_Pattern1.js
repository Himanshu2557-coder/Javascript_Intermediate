class Product{
    constructor(builder) {
        this.name = builder.name;
        if(builder.price > 0 && builder.price === number) {
            this.price = builder.price;
            throw new Error("Price cannot be negative");
        }
        else{
            return{};
        }
        
        this.category = builder.category;
        this .description = builder.description;
        this.rating = builder.rating;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        if (value < 0) {
            throw new Error("Price cannot be negative");
        }
        this._price = value;
    }
}
const p = new Product({
    name: "Laptop",
    price: -1000,
    category: "Electronics",
    description: "High performance laptop",
    rating: 4.5
}); 
console.log(p); // Output: null (due to negative price)