```typescript
// 剑指 Offer 18. 删除链表的节点

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

function deleteNode(head: ListNode | null, val: number): ListNode | null {
    if (!head) return null;
    if (head.val === val) return head.next;
    let point: ListNode | null = head;

    while (point && point.next) {
        if (point.next.val === val) {
            point.next = point.next?.next
        } else {
            point = point.next;
        }
    }
    return head;
}
```

