// this approach seems good for me

// class ListNode<T> {
//   constructor(public value: T, public next: ListNode<T> | null = null) {}
// }

class ListNode<T> {
  constructor(public value: T, public next: ListNode<T> | null = null) {}
}
// class LinkedList<T> {
//   head: ListNode<T> | null = null;

//   append(value: T) {
//     const newNode = new ListNode(value);

//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }

//     let current = this.head;

//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }

//   display() {
//     let current = this.head;

//     const linkedListValues: T[] = [];

//     while (current) {
//       linkedListValues.push(current.value);
//       current = current.next;
//     }
//     return linkedListValues;
//   }

//   public get size() {
//     let count = 0;
//     let current = this.head;

//     while (current) {
//       count++;
//       current = current.next;
//     }
//     return count;
//   }
// }

class LinkedList<T> {
  head: ListNode<T> | null = null;

  append(value: T) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    // 6-
    // head__1______2_____3____ 4________5___null
    /**
     *
     * value:10,
     * next:{
     * value:20,
     * next:{
     *
     * value:30,
     * next:{
     * value:40,
     * next:null
     *
     * }
     *
     * }
     * }
     */

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  display() {
    let current = this.head;

    const elements: T[] = [];
    while (current) {
      // console.log("current linked list is", current);
      elements.push(current.value);
      current = current.next;
    }

    return elements;
  }

  public get size() {
    let current = this.head;

    let count = 0;
    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  deleteAtFirst() {
    if (this.head !== null) {
      this.head = this.head.next;
    } else {
      throw new Error("Linked list is empty");
    }
  }

  deleteAtLast() {
    if (this.head === null) {
      throw new Error("Linked list is empty");
    }
    // if there is only one node in the list
    if (this.head.next === null) {
      this.head.next = null;
      return;
    }
    // A -> B -> C -> D -> null -1st iteration
    // B -> C -> D -> null - 2nd iteration
    // C -> D-> null - 3rd iteration
    let current = this.head;
    while (current.next && current.next.next) {
      // __________________1st iteration_________________
      // current.next(B) && current.next.next(C) = true
      // current(A) = current.next(B)
      // ______________2nd iteration_________
      // current.next(C) && current.next.next(D) = true
      // current(B) = current.next(C)

      // ______3rd iteration _________
      // condition does not exit since current.next(true) but current.next.next(false)
      current = current.next;
    }
    // reached to the last end and we set the last node to null
    current.next = null;
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

// l.deleteAtFirst();
l.deleteAtLast();

console.log("linked visual way", l.display());
console.log("linked linked", l1.display(), l1.size);
