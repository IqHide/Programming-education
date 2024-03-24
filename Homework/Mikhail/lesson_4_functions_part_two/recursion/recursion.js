function pow(x, n) {
    if (n === 1) {
        return 2;
    } else {
        return x * pow(x, n - 1);
    }
};

console.log(pow(2, 3));