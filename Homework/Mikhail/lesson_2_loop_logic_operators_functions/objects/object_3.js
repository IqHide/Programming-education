https://learn.javascript.ru/task/const-object
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user = {
  name: "John"
};

// это будет работать?
user.name = "Pete"; // будет
alert( user.name )
// почему в консоли хрома робит, а через индекс нет?