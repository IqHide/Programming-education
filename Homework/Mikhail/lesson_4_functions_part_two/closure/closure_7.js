// https://learn.javascript.ru/task/let-scope
// Что выведет данный код?

let x = 1;

function func() {
	console.log(x); // ?

	let x = 2;
}

func();
// P.S. В этой задаче есть подвох. Решение не очевидно.  Error
