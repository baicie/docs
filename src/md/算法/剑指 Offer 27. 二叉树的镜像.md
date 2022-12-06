```typescript
// 剑指 Offer 27. 二叉树的镜像

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

function mirrorTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    const queue: TreeNode[] = [root]

    while (queue.length) {
        const temp: TreeNode = queue.pop()
        const left: TreeNode = temp.left
        temp.left = temp.right
        temp.right = left

        if (temp.left) {
            queue.push(temp.left)
        }
        if (temp.right) {
            queue.push(temp.right)
        }
    }

    return root;
}
```

