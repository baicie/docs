```typescript
// 剑指 Offer 10- II. 青蛙跳台阶问题

function numWays(n: number): number {
    let pre = 1, cur = 1, sum;

    for (let i = 0; i < n; i++) {
        sum = (pre + cur) % 1000000007;
        pre = cur;
        cur = sum;
    }

    return pre
}
```

