class LinkedNode<T> {
  value: T;
  next: LinkedNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList1<T> {
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

  remove(value: T) {
    if (this.head === null) {
      console.log("List is empty nothing to remove");
      return; // list is empty not nothing to remove
    }
    if (this.head.value === value) {
      this.head = this.head.next;
    }
  }

  middleOfNode<T>(node: LinkedNode<T> | null) {
    // this
    const nodes: LinkedNode<T>[] = [];

    let current = node;

    if (current === null) {
      return null;
    }

    while (current) {
      nodes.push(current);
      current = current.next;
    }
    const middleIndex = Math.floor(nodes.length / 2);

    return nodes[middleIndex];
  }

  middleOfNodeTwoPointer<T>(head: LinkedNode<T>) {
    // the algorithms is to assign two pointer
  }
}

const linkedList = new LinkedList1<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
// linkedList.append(60);
// linkedList.append(70);
console.log("linked list is", linkedList.middleOfNode<number>(linkedList.head));
linkedList.print();
