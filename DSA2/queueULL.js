class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(value) {
        let node = new Node(value);

        if (this.isEmpty()) {
            this.front = node;
            this.rear = node;
        } else {
            this.rear.next = node
            this.rear = node;
        }

        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) return null;

        let value = this.front.value;
        this.front = this.front.next;
        this.size--;

        if (this.front === null) {
            this.rear = null;
        }

        return value;
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.front.value;
    }

    display() {
        let list = '';
        let curr = this.front;

        while (curr) {
            list += `${curr.value}->`
            curr = curr.next;
        }

        console.log(list + null);
    }

    isEmpty() {
        return this.size === 0;
    }
}

let queue = new Queue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.display()
queue.dequeue();
queue.display()
queue.peek();
