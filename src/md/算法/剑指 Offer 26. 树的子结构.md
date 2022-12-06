```typescript
// 剑指 Offer 26. 树的子结构

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
// import TreeNode from "../1223/index";

function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
    function recur(A: TreeNode, B: TreeNode): boolean {
        if (!B) return true;
        if (!A || A.val !== B.val) return false;
        return recur(A.left, B.left) && recur(A.right, B.right);
    }
    return (!!A && !!B) && (recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B))
}
// isSubStructure(null, null)
```

