class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
  }

  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  insertAfterValue(value, position) {
    const node = new Node(value);
    let curr = this.head;
    while (curr.next) {
      if (curr.value === position) break;
      curr = curr.next;
    }
    node.next = curr.next;
    curr.next = node;
  }

  insertByIndex(value, index) {
    const node = new Node(value);
    let i = 0;
    let curr = this.head;
    while (i < index) {
      curr = curr.next;
      i++;
    }
  }

  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
}

const sll = new SinglyLinkedList();
sll.prepend(25);
sll.prepend(12);
sll.append(50);

sll.prepend(1);
sll.insertAfterValue(13, 12);

sll.print();
