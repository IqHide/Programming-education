// task1
function camelize(str) {
    let arr = str.split('-');
    let result = arr[0];
    for (item of arr.slice(1)) {
        result += item[0].toUpperCase();
        result += item.slice(1)
    }

    return result;
}

// task2
function filterRange(arr, a, b) {
    let result = [];
    for (item of arr) {
        if (a <= item && item <= b) {
            result.push(item);
        }
    }

    return result;
}

// task3
function filterRangeInPlace(arr, a, b) {
    let i = 0;
    while (i < arr.length) {
        if (!(a <= arr[i] && arr[i] <= b)) {
            arr.splice(i, 1);
        }
        else {
            i++;
        }
    }
}

// task4
let arr = [5, 2, 1, -10, 8];

arr.sort().reverse();

console.log( arr ); // 8, 5, 2, 1, -10

// task5
function copySorted(arr) {
    return [...arr].sort();
}

let arr2 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr2);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr2 ); // HTML, JavaScript, CSS (без изменений)

//task6
function Calculator() {
    this['+'] = function(a, b) {
        return a + b;
    };

    this['-'] = function(a, b) {
        return a - b;
    };

    this.calculate = function(str) {
        arr = str.split(' ');
        op = arr[1];
        return this[op](Number(arr[0]), Number(arr[2]));
    };

    this.addMethod = function(name, func) {
        this[name] = func;
    };
}

// task7
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

console.log(names ); // Вася, Петя, Маша
// task8
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(item => (
    {
        id: item.id, 
        fullName: item.name + ' ' + item.surname
    }));

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // Вася Пупкин

// task9
function sortByAge(arr) {
    return arr.sort((a, b) => (a.age - b.age));
}
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr3 = [ vasya, petya, masha ];

sortByAge(arr3);

// теперь: [vasya, masha, petya]
console.log(arr3[0].name); // Вася
console.log(arr3[1].name); // Маша
console.log(arr3[2].name); // Петя

// task10
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function shuffle(array) {
    let arr_copy = array.slice();
    let result = [];
    while (arr_copy.length > 0) {
        result.push(arr_copy.splice(getRandomInt(arr_copy.length - 1), 1)[0]);
    }
    return result;
}

let array = [1, 2, 3];

console.log(shuffle(array));
console.log(shuffle(array));
console.log(shuffle(array));

// task11
function getAverageAge(arr) {
    return arr.reduce((sum, current) => sum + current.age, 0) / arr.length;
}
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr4 = [ vasya, petya, masha ];

console.log( getAverageAge(arr4) );

// task12
function unique(arr) {
    let unique = [];
    for (el of arr) {
        flag = false;
        for (let i = 0; i < unique.length; i++) {
            if (el === unique[i]) {
                flag = true;
            }
        }
        if (!flag) {
            unique.push(el);
        }
    }
    return unique;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) );

// task13
function groupById(users) {
    let result = {};
    for (user of users) {
        result[user.id] = user;
    }
    return result;
}
