// cart.test.js
const { addItem, removeItem, getTotalItems } = require('./cart');

describe('Shopping Cart', () => {
    let testCart;

    beforeEach(() => {
        testCart = []; // Fresh cart for each test
    });

    describe('addItem', () => {
        test('Positive: Add a new item with valid name and quantity', () => {
            addItem(testCart, 'apple', 3);
            expect(testCart).toEqual([
                { item: 'apple', quantity: 3 }
            ]);
        });

        test('Negative: Add an item with negative quantity', () => {
            expect(() => {
                addItem(testCart, 'apple', -1);
            }).toThrow('Quantity cannot be negative');
        });

        test('Edge Case: Add an item with quantity of 0', () => {
            addItem(testCart, 'apple', 0);
            expect(testCart).toEqual([]);
        });
    });

    describe('removeItem', () => {
        test('Positive: Remove an existing item from the cart', () => {
            addItem(testCart, 'apple', 1);
            removeItem(testCart, 'apple');
            expect(testCart).toEqual([]);
        });

        test('Negative: Attempt to remove an item not in the cart', () => {
            expect(() => {
                removeItem(testCart, 'banana');
            }).toThrow('Item not found in cart');
        });

        test('Edge Case: Remove the last item from the cart', () => {
            addItem(testCart, 'apple', 1);
            removeItem(testCart, 'apple');
            expect(testCart).toEqual([]);
        });
    });

    describe('getTotalItems', () => {
        test('Positive: Calculate the total number of items correctly', () => {
            addItem(testCart, 'apple', 2);
            addItem(testCart, 'banana', 3);
            expect(getTotalItems(testCart)).toBe(5);
        });

        test('Negative: Handle an empty cart', () => {
            expect(getTotalItems(testCart)).toBe(0);
        });

        test('Edge Case: Calculate with large quantities', () => {
            addItem(testCart, 'apple', 999999);
            expect(getTotalItems(testCart)).toBe(999999);
        });
    });
});