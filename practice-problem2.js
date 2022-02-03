function findPrimeNumber(num) {
    let count = 0;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            count++;
            break;
        }
    }
    if (count == 0) {
        return true;
    }
    else {
        return false;
    }
}

const result = findPrimeNumber(991);
console.log(result);