// FUNCTION ACCEPTS A FUNCTION
// Create a function named `runFunction` that accepts a function
// as a parameter.
// Inside the function, execute the parameter function.


/* In the console, you should see:
one
snow 0 [ 'snow', 'sun', 'ice fishing' ]
sun 1 [ 'snow', 'sun', 'ice fishing' ]
ice fishing 2 [ 'snow', 'sun', 'ice fishing' ]
firecracker
aeiouaeiouaeiouaeiouaeiou
*/

function f1() {
    console.log("one");
}

const f2 = function () {
    ["snow", "sun", "ice fishing"].forEach(console.log);
};

runFunction(f1);
runFunction(f2);
runFunction(() => console.log("firecracker"));
runFunction(function () {
    console.log("aeiou".repeat(5));
});