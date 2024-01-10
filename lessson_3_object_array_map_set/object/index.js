// const obj1 = { name: 'Misha' };
// const obj2 = obj1;

// obj2.name = 'Viktor';

// console.log('Name', {
//     one: obj1.name,
//     two: obj2.name,
//     bool: obj1 === obj2
// });

function User(name, surname, age, nation) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.naiton = nation;
    this.sayMyAge = function() {
        return `My age is ${this.age}`
    }
}

const tpm = 222;

const obj = { a: 22, obj: { b: 22, inner: { a: 23, b: 35 } } };
const obj2 = Object.assign({}, obj);
// obj2.obj.b = 10;
//  && obj2.obj.b;

function sayMyName() {
obj2 && obj2.obj
    const getName = () => this.name;

    return `My name is ${getName()} ${this.surname}`;
};

const user = new User('Viktor', 'Palchynskyi', 26, 'Russian');
const user2 = new User('Misha', 'Petrenko', 26, 'Russian');

user.sayName = sayMyName;
user2.sayName = sayMyName;

console.log(user?.sayMyAge());

const arr = [22,123,4124,5123];

console.log('Last index', arr[arr.length - 1]);

const objArr = [{ name: 'Viktor', age: 25 }, { name: 'Misha', age: 25 }];

const newArr = objArr.reduce((acc, curValue) => {
    acc.ages.push(curValue.age);
    acc.names.push(curValue.name);

    return acc;
}, { ages: [], names: [] });

console.log(newArr);