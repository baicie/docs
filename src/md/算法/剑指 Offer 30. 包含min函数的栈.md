```typescript
// 剑指 Offer 30. 包含min函数的栈

class MinStack {
    constructor() {

    }

    protected stack: number[] = [];

    push(x: number): void {
        this.stack.push(x);
    }

    pop(): void {
        this.stack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    min(): number {
        return Math.min(...this.stack)
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
```

