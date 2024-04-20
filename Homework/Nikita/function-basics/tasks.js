// task 1
// Разницы между этими функциями нет
//task 2
function checkAge(age) {
    return (age > 18) || confirm("Родители разрешили");
}

function checkAge(age) {
    return (age > 18) ? true : confirm("Родители разрешили");
}

