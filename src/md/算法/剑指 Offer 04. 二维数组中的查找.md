```typescript
// 剑指 Offer 04. 二维数组中的查找

function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  let i = matrix.length - 1,
    j = 0;

  while (i >= 0 && j < matrix[0].length) {
    if (matrix[i][j] > target) {
      i--;
      // 当 matrix[i][j] > target 时，执行 i-- ，即消去第 i 行元素；
    } else if (matrix[i][j] < target) {
      // 当 matrix[i][j] < target 时，执行 j++ ，即消去第 j 列元素；
      j++;
    } else {
      return true;
    }
  }
  return false;
}

const nums28 = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
console.log(findNumberIn2DArray(nums28, 5));

```

