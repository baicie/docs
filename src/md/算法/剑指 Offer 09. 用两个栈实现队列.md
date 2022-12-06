```typescript
// 剑指 Offer 09. 用两个栈实现队列

class CQueue {
    // constructor() {

    // }
    // 输入栈
    p: number[] = [];
    // 输出栈
    q: number[] = [];

    appendTail(value: number): void {
        this.p.push(value);
    }

    deleteHead(): number {
        // 输出栈空时
        if (!this.q.length) {
            // 将输入栈值放到输出栈
            while (this.p.length) {
                this.q.push(this.p.pop());
            }
        }

        return this.q.pop() ?? -1
    }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
```

