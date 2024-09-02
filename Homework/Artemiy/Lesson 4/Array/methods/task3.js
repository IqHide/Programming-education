function filterRangeInPlace(arr, a, b) {
	return arr.map((item, index, array) => {
		if (!(item <= b && item >= a)) {
			array.splice(index, 1);
		}
	});
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log(arr); // [3, 1]
