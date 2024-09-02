function getMaxSubSum(arr) {
	let sum = 0;
	let actualSubArr = 0; //Актуальная сумма подмассива
	for (let number of arr) {
		actualSubArr += number;
		sum = sum < actualSubArr ? actualSubArr : sum;
		actualSubArr = actualSubArr < 0 ? 0 : actualSubArr;
	}
	return sum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([-1, -2, -3])); // 0
