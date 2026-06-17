let arr = [10, 2, 9, 1, 5, 6];

// Bubble sort 
function bubbleSort(ar) {
    let n = ar.length - 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
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
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    console.log(left, right)
    let result = [];
    let i = 0, j = 0;

    // 6 3
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    //[3]

    return result.concat(left.slice(i)).concat(right.slice(j));

}


console.log("Original array:", arr);
// console.log(mergeSort(arr))
// console.log(bubbleSort(arr));
console.log(SelectionSort(arr));
// console.log(InsertionSort(arr));