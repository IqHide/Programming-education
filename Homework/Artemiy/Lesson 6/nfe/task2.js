const sum = function (a) {
	let summ = a;
	let plus = b => {
		summ += b;
		return plus;
	};
	plus.toNumber = function () {
		return summ;
	};

	return plus;
};

console.log(sum(0)(1)(2)(3)(4)(5).toNumber());
