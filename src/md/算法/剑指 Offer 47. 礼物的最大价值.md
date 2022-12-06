```typescript
// 剑指 Offer 47. 礼物的最大价值

function maxValue(grid: number[][]): number {
    const row = grid.length
    const col = grid[0].length
    const dp: number[][] = new Array(row + 1).fill(undefined).map(() => new Array(col + 1).fill(0));
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
        }
    }

    return dp[row][col];
}
```

