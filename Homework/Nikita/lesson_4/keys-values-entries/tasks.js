// task 1
function sumSalaries(salaries) {
    let result = 0;
    for (el of Object.values(salaries)) {
        result += el;
    }
    return result;
}

// task 2

function count(obj) {
    return Object.entries(obj).length
}
