// Создайте объект car с свойством brand и методом startEngine. Затем создайте объект electricCar, который наследует от car и добавляет новое свойство batteryLevel. Проверьте, что объект electricCar имеет доступ к свойству brand и методу startEngine, а также может использовать своё собственное свойство batteryLevel.
let car = {
	startEngine() {
		console.log(`чих-пых-пых`);
	},
	brand: 'бибика',
};
let electricCar = {
	__proto__: car,
	batteryLevel: 78,
};
car.startEngine();
electricCar.startEngine();
console.log(electricCar.brand);
console.log(electricCar.batteryLevel);
