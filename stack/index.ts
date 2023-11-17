interface IStack<T> {
  push: (item: T) => void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
}
class Stack<T> implements IStack<T> {
  private items: T[] = [];
  constructor(private readonly capacity: number = Infinity) {}

  push(item: T) {
    if (this.size() === this.capacity) {
      throw new Error("Stack overflow and cannot be added more items");
    }
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.size() - 1];
  }

  size() {
    return this.items.length;
  }
}

const s = new Stack<string>();

s.push("A");
s.push("B");
s.push("C");
s.push("D");
s.push("E");
s.push("F");

console.log("peek ", s.peek());
console.log("pop ", s.pop());
console.log("size ", s.size());
