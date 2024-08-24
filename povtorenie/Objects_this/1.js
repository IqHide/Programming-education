https://learn.javascript.ru/task/object-property-this
Здесь функция makeUser возвращает объект.

Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Каким будет результат?    ERROR, potomu 4to ne method.





Ответ: ошибка.

Проверьте:

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Error: Cannot read property 'name' of undefined
Это потому, что правила, которые определяют значение this, никак не смотрят на объявление объекта. Важен лишь момент вызова.

Здесь значение this внутри makeUser() равно undefined, потому что оно вызывается как функция, а не через «точечный» синтаксис как метод.

Значение this одно для всей функции, блоки кода и объектные литералы на него не влияют.

Таким образом, ref: this фактически принимает текущее this функции makeUser().

Мы можем переписать функцию и вернуть то же самое this со значением undefined:

function makeUser(){
  return this; // на этот раз нет литерала объекта
}

alert( makeUser().name ); // Error: Cannot read property 'name' of undefined
Как вы можете видеть, результат alert( makeUser().name ) совпадает с результатом alert( user.ref.name ) из предыдущего примера.

Вот противоположный случай:

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user = makeUser();

alert( user.ref().name ); // John
Теперь это работает, поскольку user.ref() – это метод. И значением this становится объект перед точкой ..