let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null,
			},
		},
	},
};

function printReverseRecursion(list) {
	if (list.next) {
		printReverseRecursion(list.next);
	}
	console.log(list.value);
}

function printReverseRound(list) {
	let arrayReverse = [];
	while (list) {
		arrayReverse.push(list.value);
		list = list.next;
	}
	arrayReverse.reverse().forEach(value => console.log(value));
}

printReverseRecursion(list);
printReverseRound(list);
