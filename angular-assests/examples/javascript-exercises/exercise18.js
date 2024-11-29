const assert = require("assert");
// ONE OBJECT
// Create a function named `makeObject`.
// Return an object with three properties:
// - name === "Timi"
// - isGrumpy === false
// - favoriteColors === an array containing "orange" and "lilac"

// Execute this exercise.
// If you see the message "success!", all tests pass.

const expected = {
    name: "Timi",
    isGrumpy: false,
    favoriteColors: ["orange", "lilac"]
};
assert.deepStrictEqual(makeObject(), expected);
console.log("success!");