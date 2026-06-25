let arr = [5, 2, 9, 1, 5, 6];


// Swap function to swap two elements in an array
function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

// Bubble sort 
function bubbleSort(ar) {
    let n = ar.length - 1;
    let swapped = false;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            if (ar[j] > ar[j + 1]) {
                [ar[j], ar[j + 1]] = [ar[j + 1], ar[j]];
                swapped = true;
            }
        }
    }

    if (!swapped) return ar;

    return ar;
}
// Time complexity
// Best case O(n) (with swapped optimization)
// Average Case O(n^2)
// Worst Case O(n^2)

// Interview tip: If asked, "When is Bubble Sort O(n)?" the correct answer is:

// When the array is already sorted and the 
// implementation uses a swapped flag (early termination optimization). 
// Without this optimization, Bubble Sort is O(n²) even for a sorted array.


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
// 4 5 2 1
//   4
function InsertionSort(ar) {
    let n = ar.length;

    for (let i = 1; i < n; i++) {
        let key = ar[i];
        let j = i - 1;

        while (j >= 0 && ar[j] > key) {
            ar[j + 1] = ar[j];
            j--;
        }
        ar[j + 1] = key;
    }
    return ar;
}

//Merge Sort
function mergeSort(arr) {
    console.log("Merge Sort called with:", arr);
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    console.log("Mid:", mid);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}


function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }

    i++;
    swap(arr, i, high);
    return i;
}

function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {

        const pivot = partition(arr, low, high);

        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
    }
}


// Time Complexity:
// Best Case:    O(n log n)
// Average Case: O(n log n)
// Worst Case:   O(n²)

// Space Complexity:
// Best/Average: O(log n)
// Worst Case:   O(n)

console.log("Original array:", arr);
// console.log(mergeSort(arr))
quickSort(arr)
console.log("Quick Sort Result:", arr);
// console.log(bubbleSort(arr));
// console.log(SelectionSort(arr));
// console.log(InsertionSort(arr));
// console.log("Sorted array:", arr);