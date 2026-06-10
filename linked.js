class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    preappend(value) {

        let curr = this.head;

        while (curr) {
            if (curr.value === value) return console.log("This value is already valable!");
            curr = curr.next;
        }

        let node = new Node(value);

        node.next = this.head
        this.head = node;
        this.size++;
    }

    isEmpty() {
        return this.getSize() === 0;
    }

    getSize() {
        return this.size;
    }
}

let list = new LinkedList();
list.preappend(20)
list.preappend(2)
list.preappend(2)


console.log(list)
