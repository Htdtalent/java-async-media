const assert = require("assert");
// EXTRACT NAMES
// Create a function named `extractNames` that accepts on array of objects.
// Transform the array into a new array that only contains strings.
// Strings are drawn from the objects' `name` property, 
// but only if it exists.
// Return the result.
// Hint: the `map` method is useful here.


// Execute this exercise.
// If you see the message "success!", all tests pass.

let input = [
    { a: 1, name: "a", c: true },
    { name: "b" },
    { firstName: "first", name: "c" }
];
let expected = ["a", "b", "c"]
assert.deepStrictEqual(extractNames(input), expected);

input = [
    { a: 1, name: "a", c: true },
    { firstName: "b" },
    { firstName: "first", name: "c" }
];
expected = ["a", "c"]
assert.deepStrictEqual(extractNames(input), expected);

input = [];
expected = []
assert.deepStrictEqual(extractNames(input), expected);

input = [{ firstName: "first", lastName: "last", name: "name" }];
expected = ["name"]
assert.deepStrictEqual(extractNames(input), expected);

console.log("success!");