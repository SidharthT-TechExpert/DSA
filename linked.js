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

    append(value) {
        let tail = this.head;

        while (tail && tail.next !== null) {
            if (tail.value === value) {
                return console.log("This value is dupllicat!")
            }
            tail = tail.next.next;
        }

        let node = new Node(value);
        tail.next = node;
        this.size++;
    }

    print() {

        if (this.isEmpty()) {
            return console.log('This list is empty!');
        }

        let list = '';
        let curr = this.head;

        while (curr) {
            if (curr.value != undefined) {
                list += `${curr.value} `;
            }
            curr = curr.next;
        }

        console.log(list)
    }

    removeF() {
        if (this.isEmpty()) {
            return console.log("This is empty list!");
        }
        this.head = this.head.next;
        this.size--;
    }

    removeL() {
        let tail = this.head;
        while (tail && tail.next?.next) {
            tail = tail.next;
        }
        tail.next = null;
        this.size--;
    }

    findMidR() {
        let slow = this.head;
        let fast = this.head.next;
        let prev = null;

        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next
        }

        prev.next = prev.next.next;
    }

    remove(value) {
        if (this.isEmpty()) {
            return console.log("This is empty list!");
        }

        let curr = this.head;

        while (curr) {
            if (curr.value === value) {
                curr.value = curr.next.value;
                curr.next = curr.next.next;
                this.size--;
                return;
            }
            curr = curr.next;
        }
        console.log("Value not found!");
    }

    reverse() {
        let prev = null;
        let curr = this.head;

        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        this.head = prev;

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
list.preappend(3)
list.append(30)

list.print();
list.reverse();
list.print();