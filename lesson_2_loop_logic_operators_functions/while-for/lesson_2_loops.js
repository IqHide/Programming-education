function sum(a, b) {
    return a + b;
}

for (let index = 0; index <= 10; index++) {
    if (index > 5) {
        console.log('HOW');
    } else {
        console.log('a', sum(index, index + 10));
    }
}

// while(a <= 10) {
//     a++;
    
//     if (a > 5) {
//         console.log('HOW');
//     } else {
//         console.log('a', sum(a, a + 10));
//     }
// }

// do {
//    console.log('a', sum(a, a + 10));
//    a++;
// } while (a <= 10);

