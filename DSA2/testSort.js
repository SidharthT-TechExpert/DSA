let arr = [5, 2, 9, 1, 5, 6];

//Swap 
function swap(ar, a, b) {
    [ar[a], ar[b]] = [ar[b], ar[a]];
}
// Bubble sort
function bubbleSort(ar) {
    let n = ar.length - 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            if (ar[j] > ar[j + 1]) {
                swap(ar, j, j + 1);
            }
        }
    }
    return ar;
}

// selection Sort 
function selectionSort(ar) {
    let n = ar.length - 1;

    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (ar[j] < ar[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            swap(ar, minIndex, i);
        }
    }
    return ar;
}

// Insertion Sort 
function insertionSort(ar) {
    let n = ar.length - 1;

    for (let i = 1; i < n; i++) {
        let key = ar[i];
        let j = i;

        while (j >= 0 && ar[j] > key) {
            ar[j + 1] = ar[j];
            j--;
        }

        ar[j + 1] = key;
    }

    return ar;
}

// Merge Sort 
function mergeSort(ar) {
    if (ar.length <= 1) return ar;

    let mid = Math.floor(ar.length / 2);

    let left = mergeSort(ar.slice(0, mid));
    let right = mergeSort(ar.slice(mid));


    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i])
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort(arr))