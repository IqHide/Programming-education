const arr = [10,10,10,11,12,13,14];
const arr2 = new Set([10, 10, 10, 11, 12, 13, 14]);
const newArr = Array.from(new Set(arr));

console.log(newArr);
console.log(arr2);