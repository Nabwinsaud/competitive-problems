// this approach seems good for me

class ListNode<T> {
  constructor(public value: T, public next: ListNode<T> | null = null) {}
}

class LinkedList<T> {
  head: ListNode<T> | null = null;

  append(value: T) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  display() {
    let current = this.head;

    const linkedListValues: T[] = [];

    while (current) {
      linkedListValues.push(current.value);
      current = current.next;
    }
    return linkedListValues;
  }

  public get size() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
}

const l = new LinkedList<number>();

const l1 = new LinkedList<string>();

l1.append("A");
l1.append("B");
l1.append("C");
l1.append("D");
l.append(10);
l.append(20);
l.append(30);
l.append(40);

console.log("linked visual way", l.display());
console.log("linked linked", l1.display(), l1.size);
