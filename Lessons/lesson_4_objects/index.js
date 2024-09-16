const a = 12;
// const vc = 10;
// const jj = 8;
const obj = {
  vc: 20,
  jj: 50,
};

const obj2 = {
  ad: obj,
  vc: 10,
  jj: 9, 
  fucn1() {
    return this.vc + this.jj;
  },
};

// console.log(obj2.fucn1.call({ vc: 5, jj: 4 }));

// function func2() {
//   const vc = 25;
//   // tut 1
//   return function fucn1(jj) {
//     return vc + jj;
//   };
// }

// const aa = func2();

// console.log(obj2.fucn1());
// console.log(aa(10));
// console.log(aa(20));

// const person = {
//   name: "Viktor",
//   age: 26,
// };

// const person2 = {
//   name: "Nikita",
//   age: 19,
// };

// const person3 = {
//   name: "Misha",
//   age: 26,
// };

// function Person(name, age) {
//   if (!name || !age) {
//     return {};
//   }

//   this.sayHi = function () {
//     return `Hello ${this.name}!`;
//   };

//   this.name = name;
//   this.age = age;

//   this.consruct = function Work(occupation, wage) {
//     this.occupation = occupation;
//     this.wage = wage;
//   };
// }

// const person1 = new Person("Viktor", 26);
// const person2 = new Person("Nikita", 19);
// const person3 = new Person("Misha", 26);
// const work1 = new person1.consruct("Water", 40000);

// console.log(new Person());
// console.log(person1.sayHi());
// console.log(person2.sayHi());
// console.log(work1);

const arr = [123, 424, "asdf", true, obj];

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   console.log(element);
// }

arr.push(100);
arr.unshift(11);
const last = arr.pop();
const first = arr.shift();

console.log(arr);
console.log(last);
console.log(first);