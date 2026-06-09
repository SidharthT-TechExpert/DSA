function factorial(num) {
    if (num <= 1) return 1;

    return num * factorial(num - 1);
}


function power(num, pow) {
    if (pow <= 0) return 1;

    return num * power(num, pow - 1)
}

function countDigits(n) {
    if (n < 10) return 1;

    return 1 + countDigits(Math.floor(n / 10))
}

console.log(countDigits(123456))


