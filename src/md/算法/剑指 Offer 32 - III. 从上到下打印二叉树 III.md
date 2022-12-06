```typescript

// 剑指 Offer 32 - III. 从上到下打印二叉树 III

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return []

    const result: number[][] = []
    const stack: [TreeNode | null, number][] = [[root, 0]];

    while (stack.length) {
        const [node, i] = stack.shift();

        if (!result[i]) {
            result[i] = [node.val]
        } else {
            if (i % 2) {
                // 奇数 右到左
                result[i].unshift(node.val)
            } else {
                result[i].push(node.val)
            }
        }
        node.left && stack.push([node.left, i + 1])
        node.right && stack.push([node.right, i + 1])
    }
    return result
}
```

