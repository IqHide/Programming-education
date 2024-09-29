// Создайте функцию `createMultiplier` которая принимает `factor` и возвращает другую функцию. Эта возвращаемая функция должна принимать число и возвращать его, умноженное на `factor`. Проверьте, что функция работает с различными факторами и числами.
function createMultiplier(factor) {
	return function (num) {
		return factor * num;
	};
}
console.log(createMultiplier(2)(3));
console.log(createMultiplier(2)(4));
console.log(createMultiplier(5)(3));
console.log(createMultiplier(5)(5));
console.log(createMultiplier(10)(3));
