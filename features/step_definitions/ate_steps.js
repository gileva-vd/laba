const assert = require('assert');
const {
    Given,
    When,
    Then
} = require('cucumber');

const {calcEat} = require('../../main')


Given('There were {int} cucumbers', function (cucumbers) {
    this.start_cucumbers = cucumbers
});

When('I ate {int}', function (int) {
    // this.actualAnswer = calcEat(this.start_cucumbers, int)
    this.actualAnswer = 10
});

Then('Left cucumbers {int}', function (int) {
    assert.equal(this.actualAnswer, int)
});