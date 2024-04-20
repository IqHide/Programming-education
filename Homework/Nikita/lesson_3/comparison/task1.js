5 > 4 // true
"ананас" > "яблоко" // false
"2" > "12" // false (ошибка, посимвольное сравнение значит true)
undefined == null // true
undefined === null // false
null == "\n0\n" // true (ошибка, забыл что null равен только undefined)
null === +"\n0\n" // false
