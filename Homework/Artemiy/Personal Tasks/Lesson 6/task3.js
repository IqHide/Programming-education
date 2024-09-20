function createMultiplier(factor) {
	return number => {
		return number * factor;
	};
}

const multipliertoTwo = createMultiplier(2);

console.log(multipliertoTwo(10));
console.log(multipliertoTwo(9));
console.log(multipliertoTwo(8));
