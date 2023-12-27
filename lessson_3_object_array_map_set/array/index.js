const arr = [212, 442, 421, 444, 521];
// const arr2 = new Array();

console.log(arr[4]);


// console.log(viktoTheBest);

const arr = [{ a: 3 },{ a: 8 },{ a: 5 }, { a: 6 }];
const arr2 = new Array(5);

arr.push('lala');
arr.unshift('zaza');

const end = arr.pop();
const start = arr.shift();

// console.log(arr.includes('soe23'));
// console.log(arr.find((value, index, obj) => {
//     console.log('Params', { value, index, obj });
//     return value.a === 'eee';
// }));

// for (const value of arr) {
//     if (value.a === 'eee') {
//         console.log(value);
//     }
// }

const mapa = arr.map((value) => value.a);
const filt = arr.filter((value) => value.a > 6);

// arr.forEach((value) => {
//     console.log(value);
// });

console.log(filt);
