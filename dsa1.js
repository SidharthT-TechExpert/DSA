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

function reverse(str, i = str.length - 1) {
    if (i < 0) return '';

    return str[i] + reverse(str, i - 1);
}

function isPalindrome(str, start = 0, end = str.length - 1) {
    if (start >= end) return true;

    if (str[start] !== str[end]) return false;

    return isPalindrome(str, start + 1, end - 1);
}

function fibonacci(n) {
    if (n <= 1) return n;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

function feb(n) {
    if (n <= 1) return n;

    let prev = 0;
    let curr = 1;

    for (let i = 2; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
}
