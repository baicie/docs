```typescript
// 剑指 Offer 10- I. 斐波那契数列

function fib(n: number): number {
    if (n < 2) return n;
    const list: number[] = new Array(n + 1);
    list[0] = 0;
    list[1] = 1;
    for (let i = 2; i < n + 1; i++) {
        list[i] = (list[i - 1] + list[i - 2]) % 1000000007;
    }
    console.log(list[n - 1], list[n - 2]);
    return list[n]
}

fib(45)
```

