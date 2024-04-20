// task 1
let i = 3;

while (i) {
  alert( i-- );
}
// последнее значение 1

// task 2
let i = 0;
while (++i < 5) alert( i ); // 1, .., 4
let i = 0;
while (i++ < 5) alert( i ); // 0, .., 5

// task 3
for (let i = 0; i < 5; i++) alert( i ); // 0, ..., 4
for (let i = 0; i < 5; ++i) alert( i ); // 0, ..., 4

// task 4
for (let i = 2; i < 11; i += 2) {
    console.log(i);
}

// task 5
let i = 0
while (i < 3) {
    console.log(`number ${i}`);
    i++;
}

// task 6
let num = prompt("Введите число больше 100", 0);
while (num && num <= 100) {
    num = prompt("Введите число больше 100", 0);
}
