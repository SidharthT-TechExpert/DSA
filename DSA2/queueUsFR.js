class Queue {
    constructor() {
        this.items = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(item) {
        this.items[this.rear] = item;
        this.rear++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is Empty";
        }

        const item = this.items[this.front];
        this.front++;
        return item;
    }

    isEmpty() {
        return this.front === this.rear;
    }

    peek(){
        if (this.isEmpty()) {
            return "Queue is Empty";
        }
        return this.items[this.front];
    }

    display() {
        console.log(this.items.slice(this.front, this.rear));
    }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.display();      // [10, 20, 30]
console.log(queue.peek());     // 10

console.log(queue.dequeue()); // 10
console.log(queue.peek());     // 20

queue.display();      // [20, 30]