class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(value) {
        this.items.push(value);
    }

    dequeue() {
        if (this.isEmpty()) return null;
        return this.items.shift();
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.items[0];
    }

    display() {
        console.log(this.items);
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.items.length;
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);


queue.display();

console.log("Dequeued:", queue.dequeue());

queue.display();

console.log("Front:", queue.peek());