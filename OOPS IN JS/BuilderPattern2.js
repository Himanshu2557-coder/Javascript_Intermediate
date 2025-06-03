class Product {
    #price;
    #name;
    #description;

    constructor(builder) {
        // Validate price
        if (builder.price <= 0 || typeof builder.price !== 'number') {
            throw new Error("Invalid price"); // Prevent object creation if price is invalid
        }

        this.#name = builder.name;
        this.#price = builder.price;
        this.#description = builder.description;
    }

    // Getters to access private fields
    get name() {
        return this.#name;
    }

    get price() {
        return this.#price;
    }

    get description() {
        return this.#description;
    }

    // Static getter that returns the Builder class
    static get Builder() {
        return class {
            constructor() {
                this.name = "";
                this.price = 0;
                this.description = "";
            }

            // Set the product name
            setName(incomingname) {
                this.name = incomingname;
                return this;
            }

            // Set the product price
            setPrice(incomingprice) {
                this.price = incomingprice;
                return this;
            }

            // Set the product description
            setDescription(incomingdescription) {
                this.description = incomingdescription;
                return this;
            }

            // Build and return the Product object
            build() {
                try {
                    return new Product(this);
                } catch (e) {
                    // Return an empty object if validation fails
                    return {};
                }
            }
        };
    }
}

// ✅ Example of using the Builder pattern with valid data
const p = new Product.Builder()
    .setName("Laptop")
    .setPrice(1000)
    .setDescription("High performance laptop")
    .build();
console.log(p); // Output: Product object with name, price, and description

// Example of using getters to access private fields
console.log("Product Name:", p.name); // Output: Laptop
console.log("Product Price:", p.price); // Output: 1000
console.log("Product Description:", p.description); // Output: High performance laptop

// ❌ Example of using the Builder pattern with an invalid (negative) price
const invalidProduct = new Product.Builder()
    .setName("Invalid Laptop")
    .setPrice(-500) // Negative price
    .setDescription("This product has an invalid price")
    .build();

console.log("Invalid Product:", invalidProduct); // Output: {} (empty object due to invalid price)

// Example of failed access on invalid product (will return undefined if not handled)
console.log("Invalid Product Name:", invalidProduct.name); // Output: undefined
console.log("Invalid Product Price:", invalidProduct.price); // Output: undefined
console.log("Invalid Product Description:", invalidProduct.description); // Output: undefined

// The Builder pattern allows for flexible and readable object creation
