// function declaration
console.log(sum(10, 42));
console.log(multy(10, 2));
function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 0;
    }

    return a + b;
}
// function expression
const multy = function(a, b) {
    return a * b;   
};

console.log(sum(10, 55));
console.log(multy(10, 3));