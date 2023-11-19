class TreeNode:
    def __init__(self, value, left=None, right=None) -> None:
        self.value = value
        self.left = left
        self.right = right

    def __str__(self):
        return f"{self.value}"


class BinaryTree:

    def bfs(self, root: TreeNode) -> list[str]:

        queues = [root]

        output: list[str] = []

        while len(queues) > 0:
            current = queues.pop(0)
            output.append(current.value)
            if current.left:
                queues.append(current.left)

            if (current.right):
                queues.append(current.right)

        return output


tree = TreeNode("A")
tree1 = TreeNode("B")
tree2 = TreeNode("C")
tree3 = TreeNode("D")
tree4 = TreeNode("E")
tree5 = TreeNode("F")

tree.left = tree1
tree.right = tree2

tree1.left = tree3
tree1.right = tree4
tree2.right = tree5

binary = BinaryTree()

print('bfs in tetst', binary.bfs(tree))
