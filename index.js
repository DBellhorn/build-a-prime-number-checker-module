/*
function isPrime(testValue) {
    if (testValue === 1 || testValue === 2) {
        return true;
    }
    if (testValue < 2) {
        return false;
    }
    if (0 === (testValue % 2)) {
        return false;
    }

    for (let x = Math.floor(testValue / 2); x > 2; --x) {
        if (0 === (testValue % x)) {
            return false;
        }
    }

    return true;
}
*/
function isPrime(testValue) {
    if (testValue < 2) {
      return false;
    }
    if (testValue < 4) {
        return true;
    }
    if (testValue % 2 === 0 || testValue % 3 === 0) {
        return false;
    }
    for (let i = 5; i * i <= testValue; i += 6) {
        if (testValue % i === 0 || testValue % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

module.exports = {
    isPrime: isPrime
};