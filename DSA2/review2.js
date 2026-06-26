let arr = [5, 3, 8, 4, 2];

// pivot: 2
// Left: []
// right:[]


// quickSort(arr);

// quickSort(ar,low = 0,high=ar.length-1){
//     if(low < high){
//         let pivot = partion(ar,low,high);
//         console.log(pivot)
        
//         quickSort(ar,pivot+1,high);
//         quickSort(ar,low,pivot-1)
//     }
//     return ar
// }

// partion(ar,low,high){
    
//     let pivot = ar[high];

// let i = 0;

// for(let j = 0 ; j < high ; j++){
//     if(pivot > ar[j]){
//         swap(ar,i,j);
//         i++
//     }
    
//     return i;
    
// }

// }

function swap (ar,a,b){
    [ar[a],ar[b]] = [a[b],a[a]];
}


class queue {
    constructor(){
        this.items = [];
    }
    
    enqueue(value){
        this.items.push(value); // 1 2 3 4
    }
    dequeue(){
        return this.items.shift()
    }
    display(){
        console.log(this.items)
    }
}

//type liner circlu priority duble ended 

let q = new queue()

q.enqueue(20)
q.enqueue(2)
q.enqueue(1)
q.display();
q.dequeue()
q.display()


// •	Create a hash table of size 5
// •	Key: Student roll number (integer)
// •	Value: Marks (integer)
// •	Handle hash collisions using Separate Chaining


class HashTable {
    constructor(size){
        this.table = new Array();
        this.size = size;
    }
    
    hash(key){
        return key % this.size;
    }
    
    set(key,value){
        let index = this.hash(key);
        
        if(!this.table[index]){
            this.table[index] = [];
        }
        
        this.table[index].push([key,value]);
    }
    
    get(key){
        let index = this.hash(key);
        
        for(let pair of this.table[index]){
            if(pair[0] === key){
                return pair[1]
            }
        }
        return undefined
    }
    
}


let st = new HashTable(5);
st.set(10,80)
st.set(15,20)
st.set(20,30);

console.log(st.get(20))






function bublesort(ar){
    let n = ar.length ;

while(n>1){
     let lastSwap = 0;
        for(let j = 1 ; j < n ; j++ ){
            if(ar[j] < ar[j-1]){
                swap(ar,j,j-1);
                lastSwap = j;
            }
        }
        if(lastSwap === 0) break
        
        n= lastSwap
    }
    return ar;
}

console.log(bublesort(arr))