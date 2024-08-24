// https://learn.javascript.ru/task/item-value
// Что выведет следующий код?

// let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push('Банан');

// что в fruits?
alert(fruits.length); // ? 4  Потому, что массивы – это объекты. Обе переменные shoppingCart и fruits являются ссылками на один и тот же массив.
