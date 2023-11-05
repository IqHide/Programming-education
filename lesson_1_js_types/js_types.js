// Primitive types
const num = -123123.23123;
// const bigInt = 10n23;
const str = 'jajajajaj';
const symbol = Symbol('#123123afna;nsf123jl12j3l1k2j31231232');
const bool = true;
const under = undefined;
const nullble = null;
let str1 = str;

str1 = 'cccc';


// Objects 
const viktor = { 'name': 'Viktor', age: 25, sayHi: function() {
    console.log(10+2);
}, mother: {
    name: 'Lilia', 
    age: 55,
}};
const misha = viktor;

misha.age = 26;

misha.sayHi();

console.log('viktor', viktor);
console.log('misha', misha);


console.log('str', str);
console.log('str1', str1);

console.log('misha', viktor === misha);
console.log('str', str === str1);