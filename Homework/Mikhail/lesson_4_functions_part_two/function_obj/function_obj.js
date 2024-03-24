function test(a, b, c) {
    test.count++;
    const c = 1;
    console.log(arguments);

    if (arguments.length > test.length) {
        throw new Error('Too much arguments');
    }

    console.log(test.count);

    return a + b;
}

const test1 = test;
const test2 = test;

test.count = 0;

test1();
test2();