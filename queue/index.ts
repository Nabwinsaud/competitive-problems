interface QueueMethods<T> {
  enqueue(element: T): void; // add elements at the end
  dequeue(): T | undefined;
  peek(): T | undefined;
  isEmpty: boolean;
  size: number;
  node(): Map<number, T>;
}

class Queue<T> implements QueueMethods<T> {
  constructor(
    // private readonly elements: Record<string, T> = {},
    private readonly elements: Map<number, T> = new Map(),
    private head: number = 0,
    private tail: number = 0
  ) {}

  enqueue(element: T): void {
    // this.elements[this.tail] = element;
    this.elements.set(this.tail, element);
    this.tail += 1;
  }

  // -head - 1,2,3- tail

  dequeue(): T | undefined {
    // const item = this.elements[this.head];
    // delete this.elements[this.head];
    const item = this.elements.get(this.head);
    this.elements.delete(this.head);
    this.head += 1;
    return item;
  }

  peek(): T | undefined {
    // return this.elements[this.head];
    return this.elements.get(this.head);
  }

  public get size() {
    return this.tail - this.head;
  }

  public get isEmpty() {
    return this.size === 0;
  }

  node() {
    return this.elements;
  }
}

const q = new Queue<number>();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);
console.log("peek", q.peek());
console.log("size", q.size);
console.log("isEmpty", q.isEmpty);
console.log("dequeue", q.dequeue());
console.log("dequeue", q.dequeue());
console.log("node", q.node());
