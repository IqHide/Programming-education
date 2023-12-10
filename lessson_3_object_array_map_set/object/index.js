// const obj1 = { name: 'Misha' };
// const obj2 = obj1;

// obj2.name = 'Viktor';

// console.log('Name', {
//     one: obj1.name,
//     two: obj2.name,
//     bool: obj1 === obj2
// });

const user = {
    name: 'Viktor', 
    surname: 'Palchynskyi',
    age: 26,
    nation: 'Russian',
    sayMyAge: function () {
        return `My age is ${this.age}`
    },
    sayMyNation: () => {
        return this.nation;
    }
};

const user2 = {
    name: 'Misha',
    surname: 'Pertrenko',
    age: 26,
    nation: 'Khohol',
}

function sayMyName() {
    const getName = () => this.name;

    return `My name is ${getName()} ${this.surname}`;
};

user.sayName = sayMyName;
user2.sayName = sayMyName;

console.log(user.sayName());
console.log(user2.sayName());
console.log(user.sayMyAge());
console.log(user.sayMyNation());