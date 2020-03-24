const assert = require('assert');
const {
    Given,
    When,
    Then
} = require('cucumber');

const {
    addToCart,
    deleteToCart,
    getTotalPrice,
    setOriginalPrice
} = require('../../main')


Given('There were {int} products in the basket', function (int) {
    setOriginalPrice(int)
});

When('Added a product to the cart for {int}', function (int) {
    addToCart(int)
});

Then('The total amount in the bucket is {int}', function (int) {
    assert.equal(getTotalPrice(), int)
});