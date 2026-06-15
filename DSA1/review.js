//duble  add first, print valus and write function remove mid  ;
// remove duplication -linked list

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DublyLink{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    prepend(value){
        let newNode =new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;//5 1 2 3 4 
            this.head = newNode;
        }
    }
    
    removeMid(){
        let slow = this.head;
        let fast = this.head;
        
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        
        
slow.prev.next = slow.next;

        // 1 2 3 
    }
    
    removeDup(){
        let curr = this.head;
        let slow = this.head.next
        while(curr && curr.next){
            while(slow && slow.next){
                console.log(slow.value)
                if(curr.value === slow.value){
                    slow.prev = slow.next;
                    slow.prev.next = slow.next
                }
                slow = slow.next;
            }
            curr = curr.next;
        }
        // 1 2 3 1 2
    }
    
    print(){
        let list = '';
        let curr = this.head;
        
        while(curr){
            if(curr.value!=undefined){
                list+=`${curr.value} `
            }
            curr = curr.next;
        }
        
        console.log(list);
    }
    
    isEmpty(){
        return this.getSize()===0;
    }
    
    getSize(){
        return this.size;
    }
}

let list =new DublyLink();

list.prepend(20)
list.prepend(2)
list.prepend(3)
list.prepend(1)
list.prepend(3)
list.prepend(2)

list.print()
// list.removeMid()
// list.removeDup();
list.print()



let ar =[1,2,3,4,5,6,7];

function binarySearch(ar,search,start=0,end=ar.length-1){
    let mid = Math.floor((start+end)/2)
    if(ar[mid]===search){
        return `value ${search} is ${mid} index`;
    }
    
    if(ar[mid]>ar[start]){ 
        return binarySearch(ar,search,start+1,end);
    } else{
        return  binarySearch(ar,search,start,end-1);
        }// 1 2 3 4 5 mid=3
}

console.log(binarySearch(ar,3))