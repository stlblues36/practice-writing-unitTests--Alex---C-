const cart = []

function addItem(itemName, quantity) {//Adds an item to the cart.
    const item = { name: itemName, quantity: quantity };
    cart.push(item);
    console.log(`${quantity} of ${itemName} added to the cart.`);
}

addItem("potato", 5);
addItem("salad", 3);

function removeItem(itemName) {//Removes an item from the cart.
    const index = cart.findIndex(item => item.name === itemName);
    if (index !== -1) {
        cart.splice(index, 1);
        console.log(`${itemName} removed from the cart.`);
    } else {
        console.log(`${itemName} not found in the cart.`);
    }
}
removeItem("potato");
removeItem("salad");

function getTotalItems() {//Returns the total number of items in the cart.
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].quantity;
    }
    return total;
}
console.log(`Total items in the cart: ${getTotalItems()}`);

module.exports = { addItem, removeItem, getTotalItems };