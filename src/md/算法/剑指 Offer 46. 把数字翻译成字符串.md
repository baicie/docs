```typescript
function translateNum(num: number): number {
    const s = num.toString();
    const length = s.length
    const dp: number[] = new Array(length + 1);

    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= length; i++) {
        const temp = s.substring(i - 2, i)
        if (temp.localeCompare("10") >= 0 && temp.localeCompare("25") <= 0) {
            dp[i] = dp[i - 1] + dp[i - 2]
        } else {
            dp[i] = dp[i - 1]
        }
    }

    return dp[length]
}
```

