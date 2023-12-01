const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};

//        1
//    2        3
// 4

/**
 *  Tree
 */

function inOrder(root: typeof tree | null) {
  //
  //   1
  // 2   3
  // root,left,right,PreOrder
  // left,root,right - inOrder
  // left,right,root - postOrder
  //  2,1,3
  // iterative approach

  if (root === null) return [];
  const list = [root];

  const output: number[] = [];
  while (list.length > 0) {
    const current = list.pop();
    if (current?.left) output.push(current.left.val);
    if (current?.val) output.push(current.val);
    if (current?.right) output.push(current.right.val);
  }
  return output;
}

console.log(inOrder(tree));
