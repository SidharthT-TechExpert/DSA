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

//Selection   Sort 
function SelectionSort(ar) {
    let n = ar.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (ar[j] < ar[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [ar[i], ar[minIndex]] = [ar[minIndex], ar[i]];
        }
    }
    return ar;
}

//Insertion Sort
function InsertionSort(ar) {
    let n = ar.length;
    for (let i = 1; i < n; i++) {
        let key = ar[i];
        let j = i - 1;
        while (j >= 0 && ar[j] > key) {
            console.log(ar[j], key)
            ar[j + 1] = ar[j];
            j--;
        }
        ar[j + 1] = key;
    }
    return ar;
}

console.log("Original array:", arr);
// console.log(bubbleSort(arr));
// console.log(SelectionSort(arr));
console.log(InsertionSort(arr));