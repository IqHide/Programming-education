// https://learn.javascript.ru/task/changing-prototype
// В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.

// Сначала у нас есть такой код:

function Rabbit() {}
Rabbit.prototype = {
	eats: true,
};

let rabbit = new Rabbit();

alert(rabbit.eats); // true
// Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?

// function Rabbit() {}
// Rabbit.prototype = {
// 	eats: true,
// };

// let rabbit = new Rabbit();

// Rabbit.prototype = {};

// alert(rabbit.eats); // ?    true

// …А если код такой (заменили одну строчку)?

// function Rabbit() {}
// Rabbit.prototype = {
// 	eats: true,
// };

// let rabbit = new Rabbit();

// Rabbit.prototype.eats = false;

// alert(rabbit.eats); // ?   false

// Или такой (заменили одну строчку)?

// function Rabbit() {}
// Rabbit.prototype = {
// 	eats: true,
// };

// let rabbit = new Rabbit();

// delete rabbit.eats;

// alert(rabbit.eats); // ?  true

// Или, наконец, такой:

// function Rabbit() {}
// Rabbit.prototype = {
// 	eats: true,
// };

// let rabbit = new Rabbit();

// delete Rabbit.prototype.eats;

// alert(rabbit.eats); // ?  undefined

// true.

// Присвоение нового значения свойству Rabbit.prototype влияет на [[Prototype]] вновь создаваемых объектов, но не на прототип уже существующих.

// false.

// Объекты присваиваются по ссылке. Не создаётся копия Rabbit.prototype, это всегда один объект, на который ссылается и Rabbit.prototype, и [[Prototype]] объекта rabbit.

// Таким образом, когда мы изменяем этот объект по одной ссылке, изменения видны и по другой.

// true.

// Операция delete применяется к свойствам конкретного объекта, на котором она вызвана. Здесь delete rabbit.eats пытается удалить свойство eats из объекта rabbit, но его там нет. Таким образом, просто ничего не произойдёт.

// undefined.

// Свойство eats удалено из прототипа, оно больше не существует.
