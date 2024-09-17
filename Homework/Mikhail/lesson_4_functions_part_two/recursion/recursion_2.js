// https://learn.javascript.ru/task/output-single-linked-list

// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null,
			},
		},
	},
};
// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.

// Как лучше: с рекурсией или без?
// function printList(list) {
// 	alert(list.value);
// 	if (list.next) printList(list.next);
// }

function printList(list) {
	let tmp = list;

	while (tmp) {
		alert(tmp.value);
		tmp = tmp.next;
	}
}

printList(list);
