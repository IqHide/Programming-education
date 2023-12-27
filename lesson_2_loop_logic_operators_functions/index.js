// const arr = [1, 2, 4];

// for (let i = 0; i < arr.length; i++) {
//     console.log(`arr: ${arr[i]}`);    
// }

const a = 10;
const b = 12;

// a > b ? getSome() : getAnother();

function test(params) {
    return this;
}

switch (10) {
    case 1:
        console.log(1);
        break;
    case 2: 
    case 3:
        console.log(5);
    default:
        break;
}

const tmp = 'misha';

console.log('misha say: ', 10 || 22 || tmp);

const some = { name: '', surname: 'Petrenko' };

const name = some.name || some.surname;

if (!(10 > a)) {

}

const abc =  function some(a, b = 20) {
    return a + b;
};

let age = prompt('Help');
checkAge(+age);
function checkAge(age) {
    console.log(typeof age);
	age = age >= 18 || confirm('Родители разрешили?')
}
