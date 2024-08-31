//task1

function unique(arr) {
    let map = new Map();
    for (el of arr) {
        if (!map.has(el)) {
            map.set(el, 1);
        }
    }
    let result = [];
    for (el of map.keys()) {
        result.push(el);
    }
    return result;
}

// task2
function aclean(arr) {
    let anograms = new Map();
    for (el of arr) {
        let anogram = new Map();
        for (ch of el) {
            ch = ch.toLowerCase()
            if (!anogram.has(ch)) {
                anogram.set(ch, 0);
            }
            anogram.set(ch, anogram.get(ch) + 1);
        }

        let anogram_sorted = new Map([...anogram.entries()].sort());

        let anogram_encoded = '';

        for (key of anogram_sorted.keys()) {
            anogram_encoded += `${key}${anogram_sorted.get(key)}`
        }

        if (!anograms.has(anogram_encoded)) {
            anograms.set(anogram_encoded, el);
        }
    }
    let result = [];
    for (el of anograms.values()) {
        result.push(el);
    }
    return result;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

// task3
let map = new Map();

map.set("name", "John");

// не работало тк map.keys() это итерируемый объект, а не массив. Его нужно развернуть 
let keys = [...map.keys()];

keys.push("more");
console.log(keys);

