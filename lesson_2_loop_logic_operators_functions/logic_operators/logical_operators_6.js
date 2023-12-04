// https://learn.javascript.ru/task/alert-or-assignment-and-assignment
// Что выведет код ниже?

let value = NaN

value &&= 10 // NaN
value ||= 20 // 20
value &&= 30 // 30
value ||= 40 // 30

alert(value) //30
