let age = 2;

if (!(14 <= age && age <= 90)) {
    console.log('not in range');
}


if (0 <= age && age < 14 || 90 < age) {
    console.log('not in range');
}
