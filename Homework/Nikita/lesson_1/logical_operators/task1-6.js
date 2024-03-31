// task 1
alert( null || 2 || undefined ); // 2
// task 2
alert( alert(1) || 2 || alert(3) ); // alert(1) возвратит undefined, потом 2
// task 3
alert( 1 && null && 2 ); // null
// task 4
alert( alert(1) && alert(2) ); // alert(1)
// task 5
alert( null || 2 && 3 || 4 ); 
// true (ошибка, ведь && возвращает false или последнее значение true, значит 3)
// task 6
let value = NaN;

value &&= 10;
value ||= 20;
value &&= 30;
value ||= 40;

alert(value); // 30

