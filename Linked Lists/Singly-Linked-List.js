class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    // add new nodes at the end of the linked list. Make the new node added the new tail node of the linked list.
    var newNode = new Node(data);
    if(this.head == null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // Remove the node from the end of the linked list and make the second last node the new tail node.
    if(this.head === null || this.length === 0) {
      return "EMPTY LIST";
    } else {
      let current = this.head;
      let temp = current;
      while(current.next) {
        temp = current;
        current = current.next;
      }
      current.next = null;
      this.tail = temp;
      this.tail.next = null;
      this.length--;
      if(this.length === 0 || this.head === this.tail) {
        this.head = this.tail = null;
      }
      return current;
    }
  }

  traverse() {
    // traversal of linked list
    let current = this.head;
    if(current === null) {
      return "EMPTY LIST";
    } else {
      while(current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }

  shift() { 
    // removes the existing head node and makes the second node the new head
    if(this.head === null) {
      return "EMPTY LIST";
    } else {
      let current = this.head;
      let newHead = this.head.next;
      this.head = newHead;
      this.length --;
      if(this.length === 0 || this.head === this.tail) {
        this.head = this.tail = null;
      }
      return current;
    }
  }

  unshift(data) {
    // Insert a new node at the beginning of the linked list. Make new node the head.
    let newNode = new Node(data);
    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      newNode.next = current;
      this.head = newNode;
      this.length++;
      return this.head;
    }
  }
}

var list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(4);
list.push(7);
list.push(10);
list.push(8);

console.log("New List - ")
console.log(list.traverse())

list.shift();
list.unshift(90);
list.unshift(40);

console.log("Shift + 2 Ushift - ")
console.log(list.traverse())

list.shift();
list.pop()

// list.pop()
// list.pop()
// list.pop()
// list.pop()
// list.pop()
// list.pop()

console.log("Shift + pop - ")
console.log(list.traverse())

let list2 = new SinglyLinkedList();

list2.unshift(5);
list2.unshift(4);
list2.push(3);


console.log(list2.traverse())