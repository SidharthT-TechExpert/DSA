class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

    removeFromFront() {
        if (!this.head) {
            return null;
        }
        const removedValue = this.head.value;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size--;
        return removedValue;
    }

    removeFromEnd() {
        if (!this.tail) {
            return null;
        }
        const removedValue = this.tail.value;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
        return removedValue;
    }

    print() {
        if (!this.head) {
            return console.log("This is empty list!");
        }
        let curr = this.head;
        let list = '';
        while (curr) {
            list += `${curr.value} `;
            curr = curr.next;
        }
        console.log(list);
    }

    printBackward() {
        if (!this.tail) {
            return console.log("This is empty list!");
        }
        let curr = this.tail;
        let list = '';
        while (curr) {
            list += `${curr.value} `;
            curr = curr.prev;
        }
        console.log(list);
    }



    

    isEmpty() {
        return this.getSize() === 0;
    }
    getSize() {
        return this.size;
    }
}

let list = new DoublyLinkedList();

console.log(list.isEmpty()); // true
console.log(list.getSize()); // 0
console.log(list.head);      // null
console.log(list.tail);      // null


list.prepend(10);
list.prepend(7);
list.prepend(5);
console.log(list.isEmpty());
console.log(list)