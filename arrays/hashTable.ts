class HashTable {
  constructor(
    // private table: Record<number, unknown> = {},
    private table: Map<number, unknown> = new Map(), // better way than normal {}
    public size: number = 0
  ) {}

  hash(key: string) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % this.size;
  }
  set(key: string, value: unknown) {
    const idx = this.hash(key);
    this.table.set(idx, value);
    return;
  }
  get(key: string) {
    const hash = this.hash(key);

    const value = this.table.get(hash);
    console.log("hash value is", value);
    if (!value) {
      return null;
    }
    return value;
  }

  remove(key: string) {
    const idx = this.hash(key);
    if (!idx) return null;
    this.table.delete(idx);
  }
}

const hash = new HashTable(new Map(), 20);

hash.set("name", "Nabin");
hash.set("age", "20");
hash.set("email", "nabin@gmail.com");
hash.set("arc", "Triangle");

hash.get("arc");
// hash.remove('age');
