const assert = require("assert");
// GET THE REST
// 1. Create a function.
// Name: getTheRest
// Parameters: any, any, ...rest parameter
// Returns: the rest parameter
// Description: accepts a rest parameter in the third parameter position
// and returns it.


// Execute this exercise.
// If you see the message "success!", all tests pass.

assert.deepStrictEqual(getTheRest(1, 2, 3, 4), [3, 4]);
assert.deepStrictEqual(getTheRest("a", "b", "c", "d", "e"), ["c", "d", "e"]);
assert.deepStrictEqual(getTheRest(true, false), []);
assert.deepStrictEqual(getTheRest(), []);
assert.deepStrictEqual(getTheRest({}, {}, {}), [{}]);
const now = new Date();
assert.deepStrictEqual(getTheRest(new Date(), new Date(), now, now, now), [now, now, now]);

console.log("success!");