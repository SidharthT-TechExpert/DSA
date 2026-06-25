let ar = [];

class Stack {
    constructor() {
        this.items = [];
        this.top = 10;
    }

    push(value) {
        if(this.items.length === this.top) {
            return console.log("Error: Stack is Overflow");
        }
        return this.items.push(value);
    }

    pop() {
        if(this.items.length === 0) {
            return console.log("Error: Stack is Underflow");
        }
        return this.items.pop();
    }

    peek() {
        if(this.items.length === 0) {
            return console.log("Error: Stack is Underflow");
        }
        return console.log(this.items[this.items.length - 1]);
    }

    print(value) {
        return console.log(this.items);
    }
}

const stack = new Stack();
stack.push(20)
stack.push(10);
stack.push(1);
stack.print()
stack.peek()
stack.pop()

stack.print();