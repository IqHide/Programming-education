// task 1
// Разницы между этими функциями нет
//task 2
function checkAge(age) {
    return (age > 18) || confirm("Родители разрешили");
}

function checkAge(age) {
    return (age > 18) ? true : confirm("Родители разрешили");
}

// task 3
function min(a, b) {
    return (a < b) ? a : b;
}

// task 4 
function pow(x, n) {
    if (n > 0) {
        return x * pow(x, n-1);
    }
    else if (n == 0) {
        return 1
    }
    return -1;
}

function pow(x, n) {
    result = 1;
    for (int i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}
