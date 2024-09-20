let salaries = {
	John: 100,
	Pete: 300,
	Mary: 250,
};

function topSalary(salaries) {
	/// if(!salaries.length){
	// return null;
	//}
	let maxSalary = 0;
	let topPerson = null;
	for (let [name, salary] of Object.entries(salaries)) {
		if (maxSalary <= salary) {
			maxSalary = salary;
			topPerson = name;
		}
	}
	return topPerson;
}
