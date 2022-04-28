const createProduct = (nameProduct, price, weight, color, size) => {

    let product = { nameProduct: nameProduct, price: price, weight: weight, color: color, size: size };
    return product;

}

let product = createProduct("Veste", 9.99, 1, "Black", "S");
let cart = [];

const addCart = (product, quantity) => {
    if (product && quantity != 0) {
        cart.push({ product: product, quantity: quantity });
    }
}

addCart(product, 1);
console.log(cart);

const calculateHt = () => {
    let ht = 0;
    cart.forEach(element => {
        ht += element.product.price;
    });
    return ht
}
console.log("Prix HT : " + calculateHt());

const calculateTva = () => {
    let tva = 0;
    cart.forEach(element => {
        tva += element.product.price * 1.2 * element.quantity;
    });
    return tva
}

console.log("Prix TVA : " + calculateTva())

const totalPrice = () => {
    let total = 0;
    cart.forEach(element => {
        total += element.product.price * element.quantity
    });
    total += calculateTva();
    return total
}
console.log("Prix total TVA : " + totalPrice());

const totalPriceHt = () => {
    let total = 0;
    cart.forEach(element => {
        total += element.product.price * element.quantity
    });
    total += calculateHt();
    return total
}
console.log("Prix total HT : " + totalPriceHt());

const transportCosts = () => {
    let costs = 0;
    cart.forEach(element => {
        costs += element.product.weight * 0.3 * element.quantity
    });
    return costs
}

console.log("Frais du transport : " + transportCosts());

// ********