class Stack {
    constructor() {
        this.items = [];
    }
    push(value) {
        this.items.push(value);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    display() {
        console.log(this.items);
    }

    reverse() {
        let arr = this.items;
        let left = 0;
        let right = arr.length - 1;

        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
}

const stack = new Stack();
stack.push(20);
stack.push(2);
stack.display();
stack.reverse();
stack.display();
console.log(stack.peek());
console.log(stack.pop());
stack.display();