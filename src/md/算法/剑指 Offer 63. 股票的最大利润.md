```typescript
// 剑指 Offer 63. 股票的最大利润

function maxProfit(prices: number[]): number {
    let min = Number.MAX_SAFE_INTEGER, max = 0;

    for (const price of prices) {
        if (price < min) {
            min = price;
        } else if (price - min > max) {
            max = price - min;
        }
    }

    return max;
}
```

