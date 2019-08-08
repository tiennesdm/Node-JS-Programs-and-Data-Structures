class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
            return this;
    }
    traverse() {
        var current = this.head;
        if (current) {
            while (current) {
                console.log(current.val);
                current = current.next;
            }
        }
    }
    pop() {
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while (current) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return this;
    }
    shift() {
        if (!this.head) return undefined;
        var current = this.head;
        this.head = current.next;
        this.length--;
        if (this.length == 0) {
            this.tail = null;
        }
        return current;

    }
    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;

        }
        this.length++;
        return this;

    }
}
var list = new SinglyLinkedList()
list.push("HELLO");
list.push("GOODBYE");
list.push("Shubham");
//console.log(list);
//console.log(list.traverse());
console.log(list.pop());
//console.log(list.traverse());
console.log(list.shift());
console.log(list.traverse());