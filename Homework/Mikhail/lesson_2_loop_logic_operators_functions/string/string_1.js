// https://learn.javascript.ru/task/ucfirst
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// ucFirst("вася") == "Вася";
let str = prompt('')
alert(str[0].toUpperCase() + str.slice(1))
