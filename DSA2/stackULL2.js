class Node {
    constructor(value) {
        this.value = value
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(value) {
        if (value === undefined) {
            return console.log("Not provided any value!")
        }

        let node = new Node(value)

        if (!this.isEmpty()) {
            node.next = this.head;
        }

        this.head = node;
        this.size++
    }

    pop() {
        if (this.size === 0) {
            return console.log('Errro: Stack Underflow')
        }

        this.head = this.head.next;
        this.size--;
    }

    peek() {
        return console.log(this.head.value);
    }

    print() {
        let curr = this.head;
        let list = '';
        while (curr) {
            list += `${curr.value} -> `;
            curr = curr.next;
        }
        console.log(list, 'null')
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

    isEmpty() {
        return this.getSize() === 0;
    }

    getSize() {
        return this.size;
    }
}

let stack = new Stack();

stack.push(20);
stack.push(2);
stack.push(1);
stack.push(2);
stack.print()
stack.peek();
stack.pop();
stack.print()
stack.peek()

stack.reveseStr('Hello')
