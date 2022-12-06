```typescript
// 剑指 Offer 22. 链表中倒数第k个节点

import { ListNode } from "../mode";

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

function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
    let cur = head, pre = head;
    for (let i = 0; i < k; i++) {
        cur = cur.next;
    }
    while (cur) {
        cur = cur.next;
        pre = pre.next;
    }
    return pre;
}
```

