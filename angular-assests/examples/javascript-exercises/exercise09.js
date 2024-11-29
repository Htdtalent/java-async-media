const assert = require("assert");

// ARE IN ORDER -- WITH DEFAULTS
// Create a function named `areInOrder` that accepts 4 numeric parameters
// and returns boolean `true` if the numbers are in order ascending.
// Ties are considered ordered.
// If the numbers aren't in order, return boolean `false`.
// If the caller doesn't pass an argument, give parameters the following
// default values:
// first parameter: 1
// second parameter: 2
// third parameter: 3
// fourth parameter: 4

// Execute this exercise.
// If you see the message "success!", all tests pass.

assert.strictEqual(areInOrder(2, 4, 6, 7), true);
assert.strictEqual(areInOrder(4, 1, 1, 8), false);
assert.strictEqual(areInOrder(1, 1, 2), true);
assert.strictEqual(areInOrder(-5, 0), true);
assert.strictEqual(areInOrder(-5), true);
assert.strictEqual(areInOrder(), true);
assert.strictEqual(areInOrder(-5, 0, -5, 0), false);
assert.strictEqual(areInOrder(15), false);
assert.strictEqual(areInOrder(0, 9), false);
assert.strictEqual(areInOrder(-7, -5, 4), true);
assert.strictEqual(areInOrder(-7, -5, 14), false);

console.log("success!");