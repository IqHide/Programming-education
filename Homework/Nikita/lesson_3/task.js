function create_object(s, num) {
    return {
        [s]: num,
        error: false,
    }
}

function create_object_error() {
    return {
        error: true,
    }
}

function foo(num1, num2, s) {
    if (typeof(num1) != "number" || typeof(num2) != "number") {
        return create_object_error();
    }
    let a1 = num1;
    let a2 = num2;
    if (num1 + num2 > 3) {
        return create_object(s, num1*num2);
    } else if (num1 + num2 < 3) {
        while (a1 + a2 != 3) {
            a1++;
        }
        return create_object("Nikita", 19);
    } else {
        return create_object("Nikita", 19);
    }
};

console.log(foo(5, 1, 'uuaaa'));
