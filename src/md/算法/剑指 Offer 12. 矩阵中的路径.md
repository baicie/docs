```typescript
// 剑指 Offer 12. 矩阵中的路径

function exist(board: string[][], word: string): boolean {
    const words = word.split('');
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(board, words, i, j, 0)) {
                return true;
            }
        }
    }
    return false;
}

function dfs(board: string[][], words: string[], i: number, j: number, k: number): boolean {
    // 越界
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== words[k]) return false;
    // 字符寻找完毕
    if (k === words.length - 1) return true;
    board[i][j] = '\0'
    const res = dfs(board, words, i + 1, j, k + 1) || dfs(board, words, i - 1, j, k + 1) || dfs(board, words, i, j + 1, k + 1) || dfs(board, words, i, j - 1, k + 1)
    board[i][j] = words[k]
    return res;
}
```

