function extractCurrencyValue(str) {
	return +str.slice(1);
}
//Если не числовой символ в конце строчки
function extractCurrencyValue2(str) {
	return +parseInt(str);
}
