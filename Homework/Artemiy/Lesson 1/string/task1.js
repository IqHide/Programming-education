function ucFirst(str) {
	if (str) {
		console.log(str[0].toUpperCase() + str.slice(1));
		return str[0].toUpperCase() + str.slice(1);
	}
}

ucFirst('артем');
