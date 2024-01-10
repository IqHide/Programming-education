const arr = ['Name', 'Surname'];
const str = '123123hkj1h23kh1k23::openView::view';
const [id, operation, type = 'open', ...rest] = str.split('::');

const obj = {
    name: 'Viktor',
    age: 25,
    skills: {
        english: 'B2',
        js: 'senior',
    }
};


const ob3 = {
    name1: 'Misha',
    age2: 25,
    skills2: {
        english: 'C2',
        js: 'pilot',
    }
};

const name = 'some'
const { name: n = 'Anon', ...rest1 } = obj;
const obj2 = { ...obj, ...ob3 };
const arr2 = [...arr, ...[521, 421, 1243]]


console.log(arr2);

function some({
    name = 'Anon', 
    surname = 'Anon', 
    age = 0, 
    accopation = 'Unemployed', 
    nationality = 'None', 
    language = 'E',
} = {}) 
{
    return {
        name,
        surname,
        age,
        accopation,
        nationality, 
        language,
    }
}

console.log(some());
