class Tree {
  value: number;
  left: Tree | null;
  right: Tree | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: Tree | null;
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value: number) {
    const newNode = new Tree(value);
    // creating the newNode based on condition if the node is empty then make the newNode  as the root
    if (this.isEmpty()) {
      this.root = newNode;
      return;
    }
    let current = this.root;

    //* lots of (if,if) going over here kind of sucks right ? but one if conditions is almost useless for making ts happy if current is done :)
    while (true) {
      if (current) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return; // exit the loop inserting
          }
        } else {
          if (current.right === null) {
            current.right = newNode;
            return;
          }
          current = current.right;
        }
      }
    }

    /**
     *    /   8    \
     *   /3 \        10
     *  1    6       14
     *
     * just try to make the rough binary tree
     */
  }
}

const bst = new BinarySearchTree();
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(14);
console.log("isEmpty ", bst.isEmpty(), bst);
