let arr = [5, 2, 9, 1, 5, 6];

// Bubble sort 
function bubbleSort(ar) {
    let n = ar.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (ar[j] > ar[j + 1]) {
                [ar[j], ar[j + 1]] = [ar[j + 1], ar[j]];
            }
        }
    }
    return ar;
}

console.log(bubbleSort(arr));
console.log(arr)