class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.items = [];
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    push(value) {
       this.items.push(value);
        return this;
    }

    pop() {
        return this.items.pop()
    }
}

const myStack = new Stack();
