// task 7
let start = 2;
let end = 66;
let nums = [];
for (let i = 0; i < end + 1; i++) {
    nums.push(i);
}

nums[1] = 0;

i = start;
while (i <= end**0.5) {
    for (let j = i**2; j <= end; j += i) {
        nums[j] = 0;
    }
    i++;
}

for (let i = 0; i < end + 1; i++) {
    if (nums[i] != 0) {
        console.log(nums[i]);
    }
}

