let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

function aclean(arr) {
	let set = new Set();
	arr.forEach(element => {
		set.add(element.toLowerCase().split('').sort().join(''));
	});
	return Array.from(set);
}

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
