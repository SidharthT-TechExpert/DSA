class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(value) {
        let curr = this.head;
        let node = new Node(value);
        node.next = curr;
        this.head = node;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) return null;

        this.head = this.head.next;
        this.size--;
    }

    peek() {
        if (this.isEmpty()) return null;

        return this.head.value;
    }

    reverse() {
        let curr = this.head;
        let prev = null;

        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        this.head = prev;
    }

    display() {
        let curr = this.head;
        let list = '';

        while (curr) {
            list += `${curr.value} -> `;
            curr = curr.next;
        }

        console.log(list + null);
    }

    isEmpty() {
        return this.getSize() === 0;
    }
    getSize(){
        return this.size
    }
}

let stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

stack.display()
stack.reverse()
stack.display()

stack.pop();
console.log(stack.peek())
stack.display();
stack.reverse();
stack.display()
console.log(stack.getSize())