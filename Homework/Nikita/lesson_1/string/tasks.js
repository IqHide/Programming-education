// task1
function ucFirst(str) {
  if (str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  return '';
}
// task2
function checkSpam(str) {
    for (let word of str.split(' ')) {
      console.log(word)
        if (word.toLowerCase() === "viagra") {
            return true;
        }
        if (word.toLowerCase().includes("xxx")) {
            return true;
        }
    }

    return false;
}

// task3
function truncate(str, maxlength) {
    if (str.length >= maxlength) {
        return str.slice(0, maxlength-1) + "…";
    }
    return str;
}
// task4
function extractCurrencyValue(str) {
    return Number(str.slice(1));
}

