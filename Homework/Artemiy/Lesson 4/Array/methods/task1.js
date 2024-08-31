function camelize(str) {
	let allCharacter = str.split('-');
	return allCharacter
		.map((item, index) =>
			index === 0 ? item : item.charAt(0).toUpperCase() + item.slice(1)
		)
		.join('');
}

console.log(camelize('background-color'));
console.log(camelize('list-style-image'));
console.log(camelize('-webkit-transition') == 'WebkitTransition');
