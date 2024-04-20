function truncate(str, maxLength = 20) {
	if (typeof maxLength == 'number' && str.length > +maxLength) {
		return str.slice(0, maxLength - 1) + '...';
	}
	return str;
}

console.log(truncate('jfjekfjkefj', 7));
console.log(truncate('', 7));
console.log(truncate('jfjekfjkefj', 100));
console.log(truncate('jfjekf', 7));
