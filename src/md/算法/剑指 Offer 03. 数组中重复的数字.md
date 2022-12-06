```typescript
// 剑指 Offer 03. 数组中重复的数字

function findRepeatNumber(nums: number[]): number {
  const map = new Map<number, number>();

  for (let num of nums) {
    // console.log(num)
    if (map.has(num)) return num;
    else map.set(num, num);
  }
  return -1;
}

const nums25 = [2, 3, 1, 0, 2, 5, 3];
console.log(findRepeatNumber(nums25));

```

