// cart.js

function addItem(cart, item, quantity) {
    // Input validation
    if (!item || typeof item !== 'string') {
        throw new Error('Item name must be a valid string');
    }
    if (quantity < 0) {
        throw new Error('Quantity cannot be negative');
    }
    if (quantity === 0) {
        return cart;
    }

    // Find existing item
    const existingItem = cart.find(i => i.item === item);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ item, quantity });
    }
    
    return cart;
}

function removeItem(cart, item) {
    const index = cart.findIndex(i => i.item === item);
    
    if (index === -1) {
        throw new Error('Item not found in cart');
    }
    
    cart.splice(index, 1);
    return cart;
}

function getTotalItems(cart) {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

module.exports = { addItem, removeItem, getTotalItems };