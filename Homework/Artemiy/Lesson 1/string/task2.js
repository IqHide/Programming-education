let banWord1 = 'viagra';
let banWord2 = 'XXX';

function checkSpam(str) {
	return (
		str.toLowerCase().includes(banWord1) || str.toUpperCase().includes(banWord2)
	);
}

console.log(checkSpam('viagra my life'));
console.log(checkSpam('XXx is not cartoon'));
console.log(checkSpam('ahahha, tut net slovs'));
