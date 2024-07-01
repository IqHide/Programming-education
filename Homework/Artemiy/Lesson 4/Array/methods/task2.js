let arr = [5, 3, 8, 1];

let filteredTest = filterRange(arr, 1, 4);

function filterRange(arr, a, b) {
	let filtered = arr.filter(item => item <= b && item >= a);
	return filtered;
}

console.log(filterRange(arr, 1, 4));
