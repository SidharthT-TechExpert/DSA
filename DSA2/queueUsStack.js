class Queue {
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    enqueue(value) {
        this.inStack.push(value);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is Empty";
        }

        // Move only if outStack is empty
        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop());
            }
        }

        return this.outStack.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }

        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop());
            }
        }

        return this.outStack[this.outStack.length - 1];
    }

    isEmpty() {
        return this.inStack.length === 0 && this.outStack.length === 0;
    }

    display() {
        const queue = [
            ...this.outStack.slice().reverse(),
            ...this.inStack
        ];

        console.log(queue);
    }
}


let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.display(); // [1, 2, 3]

console.log(queue.peek()); // 1
queue.display(); // [1, 2, 3]

console.log(queue.dequeue());
queue.display(); // [2, 3]