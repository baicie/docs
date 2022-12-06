```typescript
// 剑指 Offer 13. 机器人的运动范围

function movingCount(m: number, n: number, k: number): number {
    const visible: boolean[][] = new Array(m).fill(null).map(() => new Array(n).fill(false));
    function dfs(i: number, j: number, si: number, sj: number): number {
        // 终止条件 越界 超出步数 已访问过
        if (i >= m || j >= n || si + sj > k || visible[i][j]) return 0;
        // 标记当前已访问
        visible[i][j] = true;
        // 返回值为1 + 下方步数 + 右方步数 
        return 1 + dfs(i + 1, j, (i + 1) % 10 !== 0 ? si + 1 : si - 8, sj)
            + dfs(i, j + 1, si, (j + 1) % 10 !== 0 ? sj + 1 : sj - 8);
    }
    return dfs(0, 0, 0, 0)
}
```

