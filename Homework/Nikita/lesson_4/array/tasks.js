// task1
let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // 4

// task2
styles = ['Джаз', 'Блюз'];
styles.push("Рок-н-ролл");
styles[Math.floor(styles.length / 2)] = "Классика";
console.log(styles.shift());
styles.unshift("Реп");
styles.unshift("Регги");


// task3
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // вызовет функцию и выполнится команда alert, которая выведет текст с значениями массива т.к под this получает arr, изначально думал что выведет только функцию

// task4
function sumInput() {
    let arr = [];

    while (true) {
        let i = prompt();

        if (i === "" || i === null || !isFinite(i)) break;

        arr.push(Number(i));
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

// task5
function getMaxSubSum(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let prefix_sum = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        prefix_sum.push(prefix_sum[i-1] + arr[i]);
    }

    let min = 0;
    let max = -100000;
    for (let i = 0; i < prefix_sum.length; i++) {
        min = min(min, prefix_sum[i]);
        max = Math.max(max, prefix_sum[i] - min);
    }

    return max;
}

