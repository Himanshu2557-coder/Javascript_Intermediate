class Product{
    constructor(productname , productprice, productcategory, productdescription , productrating){
        this.productname = productname;
        this.productprice = productprice;
        this.productcategory = productcategory;
        this.productdescription = productdescription;
        this.productrating = productrating;
    }

    addToCart() {
        console.log(`${this.productname} added to cart`);
    }

    removeFromCart() {
        console.log(`${this.productname} removed from cart`);
    }

    displayProduct() {
        console.log(`Product Name: ${this.productname}`);
        console.log(`Price: $${this.productprice}`);
        console.log(`Category: ${this.productcategory}`);
        console.log(`Description: ${this.productdescription}`);
        console.log(`Rating: ${this.productrating} stars`);
    }
    buyProduct() {
        console.log(`${this.productname} purchased for $${this.productprice}`);
    }
}
let iPhone = new Product("iPhone 14", 999, "Electronics", "Latest model with advanced features", 4.5);
iPhone.addToCart();
iPhone.displayProduct();
iPhone.buyProduct();
iPhone.removeFromCart();

console.log(iPhone);