const someObj = {
	name: 'alalala',
	getName(a) {
		console.log(this.name + a);
		return this.name + a;
	},
};

function delay(func, ms) {
	return function (a) {
		const context = this;
		setTimeout(() => func.call(context, a), ms);
	};
}

someObj.getName = delay(someObj.getName, 1500);
someObj.getName('hopeWorks');
