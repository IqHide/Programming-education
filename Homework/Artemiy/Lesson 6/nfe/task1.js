function makeCounter() {
	let count = 0;
	function counter() {
		return ++count;
	}
	counter.set = value => {
		count = value;
		console.log(count);
	};
	counter.decrease = () => {
		return --count;
	};
	return counter;
}

let counter = makeCounter();

console.log(counter());
counter.set(10);
console.log(counter.decrease());
console.log(counter.decrease());
console.log(counter.decrease());
console.log(counter.decrease());
console.log(counter.decrease());
