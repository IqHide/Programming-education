let age;

//Используя ||
function checkAge(age) {
	return age > 18 || confirm('Мама разрешила, а?');
}

//Используя ?
function checkAge(age) {
	return age > 18 ? true : confirm('Мама разрешила, а?');
}
