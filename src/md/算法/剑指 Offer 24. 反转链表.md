```typescript
// 剑指 Offer 24. 反转链表

import { ListNode } from "../1224";

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    // const temp = head;
    let pre: ListNode | null = head;
    let cur: ListNode | null = null;

    while (pre) {
        // 保存下一个节点
        const temp = pre.next;
        // 指针反转
        pre.next = cur;
        // 后面指针前移
        cur = pre;
        // 前指针移动到下一个节点
        pre = temp;
    }

    return cur;
};
```

