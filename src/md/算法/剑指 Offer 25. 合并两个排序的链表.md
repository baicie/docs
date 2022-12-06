```typescript
// 剑指 Offer 25. 合并两个排序的链表

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

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const node: ListNode = new ListNode(0)
    let temp: ListNode = node;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            temp.next = l1;
            l1 = l1.next;
        } else {
            temp.next = l2;
            l2 = l2.next;
        }

        temp = temp.next;
    }

    temp.next = !l1 ? l2 : l1;

    return node.next;
}
```

