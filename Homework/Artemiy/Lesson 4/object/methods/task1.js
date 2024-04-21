function makeUser() {
	return {
		name: 'John',
		ref: this,
	};
}

let user = makeUser();

alert(user.ref.name); // Каким будет результат?

//Ответ: Будет ошибка, так как makeUser() - это функция, а не метод. В данном случае this == undefined
