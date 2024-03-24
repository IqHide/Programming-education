function counter() {
    let count = 0;

    return function() {
        return count++;
    };
}

const counter1 = counter();
const counter2 = counter();

counter1();
counter1();
counter2();
counter1();
counter2();
counter2();

console.log(counter1());
console.log(counter2());