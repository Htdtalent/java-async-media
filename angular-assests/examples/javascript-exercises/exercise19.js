const assert = require("assert");
// MAKE OBJECT
// Create a function named `makeObject`.
// Parameters: string, string, string
// Create an object with three properties.
// - assign the first parameter to a title property
// - assign the second parameter to a firstName property
// - assign the third parameter to a lastName property
// Hint: shorthand properties are useful here, but not strictly necessary.
// Return the object.



// Execute this exercise.
// If you see the message "success!", all tests pass.

assert.deepStrictEqual(makeObject("", "Merilee", "Sheldrick"), { title: "", firstName: "Merilee", lastName: "Sheldrick" });
assert.deepStrictEqual(makeObject("Mr.", "Bale", "Packmann"), { title: "Mr.", firstName: "Bale", lastName: "Packmann" });
assert.deepStrictEqual(makeObject("Dr.", "Letisha", "Pursey"), { title: "Dr.", firstName: "Letisha", lastName: "Pursey" });

console.log("success!");