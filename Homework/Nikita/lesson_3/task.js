// ошибки + декомпозиция
function create_object() {
}
function foo(num1, num2, s) {
    if (typeof(num1) != Number || typeof(num2) != Number) {
        return {
        }
    }
    let a1 = num1;
    let a2 = num2;
    if (num1 + num2 > 3) {
        return {
            [s]: num1 * num2,
        }
    } else if (num1 + num2 < 3) {
        while (a1 + a2 != 3) {
            a1++;
        }

        return {
            Nikita: 19,
        }

    } else {
        return {
            Nikita: 19,
        }

    }
};

console.log(foo(1, 1, 'uuaaa'));
