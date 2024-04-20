/*Напишите if..else, соответствующий следующему switch:*/

//Используем ===, т.к switch работает учитывая строгое сравнение, т.е учитывая типы данных
let browser

if (browser === 'Edge') {
	alert("You've got the Edge!")
} else if (
	browser === 'Chrome' ||
	browser === 'Firefox' ||
	browser === 'Opera' ||
	browser === 'Safari'
) {
	alert('Okay we support these browsers too')
} else {
	alert('We hope that this page looks ok!')
}
