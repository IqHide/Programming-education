// task 1
// не додумался, оказывается если функции возвращают один и тот же объект
let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() );

//task 2

function Calculator() {
    this.a = 0;
    this.b = 0;
    this.read = function() {
        this.a = Number(prompt("введите 1 число", 1));
        this.b = Number(prompt("введите 2 число", 1));
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    };
}

// task 3

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += Number(prompt("введите число", 0));
    };
}
