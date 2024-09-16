//task1
alert(null || 2 || undefined) //Вывод: 2

//task 2
alert(alert(1) || 2 || alert(3)) //Вывод: сначала срабатывает alert(1), который выводит 1, затем внешний alert выводит 2, т.е Ответ: 1 2

//task 3
alert(1 && null && 2) // Вывод: null

//task 4
alert(alert(1) && alert(2)) //Вывод: 1 из возвращается undefined, который возвращает alert(1)

//task 5
alert(null || (2 && 3) || 4) // Вывод: 3

//task 6
let value = NaN

value &&= 10 // value - ложно => нет присваивания
value ||= 20 // value - ложно => есть присваивание
value &&= 30 // value - истинно => есть присваивание
value ||= 40 // value - истинно => нет присваивание

alert(value) // Ответ: 30
