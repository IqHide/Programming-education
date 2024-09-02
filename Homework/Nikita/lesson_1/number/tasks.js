// task1
a = +prompt("", 0);
b = +prompt("", 0);
alert( a + b);

// task2
// Возможно, из-за того, что это число сохранено не точно, к примеру 6.34999999.., и поэтому идет округление в меньшую сторону

// task3
function readNumber() {
    let number;
    while (true) {
        number = prompt("");

        if (number === "" || number === null) {
            return null;
        }

        if (isFinite(number)) {
            return number;
        }
    }
}

// task4
let i = 0;
while (i != 10) {
  i += 0.2;
}
// Он не завершиться из-за того, что накопится неточность дальше после запятой, и число не будет равняться точно 10

// task5
function random(min, max) {
    return min + Math.random * (max - min);
}

// task6

function random(min, max) {
    return min + Math.round(Math.random * (max - min));
}
// Получилось неправльное решение задачи, вот правильное
function random(min, max) {
    return min + Math.floor(Math.random * (max + 1 - min));
}
// так получится одинаковое распределение чисел


