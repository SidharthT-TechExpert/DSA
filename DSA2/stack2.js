let ar = [];

class Stack {
    constructor() {
        this.items = [];
        this.top = 10;
    }

    push(value) {
        if (this.items.length === this.top) {
            return console.log("Error: Stack is Overflow");
        }
        return this.items.push(value);
    }

    pop() {
        if (this.items.length === 0) {
            return console.log("Error: Stack is Underflow");
        }
        return this.items.pop();
    }

    peek() {
        if (this.items.length === 0) {
            return console.log("Error: Stack is Underflow");
        }
        return console.log(this.items[this.items.length - 1]);
    }

    removeMid() {
        if (this.items.length === 0) {
            return console.log("Error: Stack is Underflow");
        }

        let mid = Math.floor(this.items.length / 2) + 1;

        let rest = [];

        while (this.items.length > mid) {
            rest.push(this.items.pop());
        }

        let removed = this.items.pop();

        while (rest.length) {
            this.items.push(rest.pop());
        }

        return console.log('Removed value :', removed);

    }

    // Insert an element at the bottom

    insertAtBottom(item) {

        // Base Case
        if (this.items.length === 0) {
            this.push(item);
            return;
        }

        // Remove top
        let top = this.pop();
        console.log('Removed value :', top,this);

        // Recursive call
        this.insertAtBottom(item);

        // Restore top
        this.push(top);
    }

    // Reverse the stack
    reverseStack() {

        // Base Case
        if (this.items.length === 0) {
            return;
        }

        // Remove top
        let top = this.pop();


        // Reverse remaining stack
        this.reverseStack();

        // Insert removed element at bottom
        this.insertAtBottom(top);
    }

    reveseStr(str) {
        let stack = [];

        for (let char of str) {
            stack.push(char);
        }

        let reversed = '';

        while (stack.length > 0) {
            reversed += stack.pop();
        }

        return console.log(reversed);

    }

    reverse(){
     let stack = new Stack();

     while(this.items.length > 0){
        stack.push(this.pop());
     }

     this.items = stack.items;

     console.log('Reversed stack:', this.items);
    }

    print(value) {
        return console.log(this.items);
    }
}

const stack = new Stack();
stack.push(20)
stack.push(10);
stack.push(2);
stack.push(3);
// stack.push(4);
stack.print()
stack.reverse();
stack.print();