class LinkedNode<T> {
  value: T;
  next: LinkedNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: LinkedNode<T> | null;
  tail: LinkedNode<T> | null;
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value: T) {
    const newNode = new LinkedNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail == null) {
        throw new Error("tail should not be null");
      }
      //* If the linked list is not empty, update the next property of the current tail node to point to the new node.
      this.tail.next = newNode;
      this.tail = newNode; // update the references
    }
  }

  print(): void {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log("current node value is", currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const linkedList = new LinkedList<number>();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
linkedList.append(50);
linkedList.append(60);
linkedList.append(70);
// console.log("linked list is", linkedList);
linkedList.print();
