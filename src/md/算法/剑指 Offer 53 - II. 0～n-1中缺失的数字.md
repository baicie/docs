```typescript
// 剑指 Offer 53 - II. 0～n-1中缺失的数字

function missingNumber(nums: number[]): number {
  let i = 0,
    j = nums.length - 1;

  while (i <= j) {
    const m = Math.floor((i + j) / 2);
    if (nums[m] == m) {
      // 左半区合理
      i = m + 1;
    } else {
      j = m - 1;
    }
  }

  return i;
}

const nums27 = [0, 1, 2, 3, 4, 5, 6, 7, 9];

console.log(missingNumber(nums27));

```

