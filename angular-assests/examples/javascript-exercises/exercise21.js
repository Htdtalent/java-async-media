const assert = require("assert");
// MERGE OBJECTS
// Create a function named `mergeObjects` that accepts two objects.
// Merge the objects into a single object result with a property-by-property merge.
// If the second object has the same property as the first, the result object
// uses the second's.
// Hint: spread syntax is useful here.

// Execute this exercise.
// If you see the message "success!", all tests pass.

const testCases = [
    {
        firstObj: { a: 1, b: "b" },
        secondObj: { c: true },
        expected: { a: 1, b: "b", c: true }
    },
    {
        firstObj: { a: 1 },
        secondObj: { a: "aye", b: "banana" },
        expected: { a: "aye", b: "banana" }
    },
    {
        firstObj: { a: 1, b: "b" },
        secondObj: { c: true, d: ["red", "orange"] },
        expected: { a: 1, b: "b", c: true, d: ["red", "orange"] }
    }
];

for (const testCase of testCases) {
    assert.deepStrictEqual(mergeObjects(testCase.firstObj, testCase.secondObj), testCase.expected);
}


console.log("success!");