```typescript
// 剑指 Offer 11. 旋转数组的最小数字

function minArray(numbers: number[]): number {
  let i = 0,
    j = numbers.length - 1;

  while (i <= j) {
    const m = Math.floor((i + j) / 2);

    if (numbers[m] < numbers[j]) {
      j = m;
    } else if (numbers[m] > numbers[j]) {
      i = m + 1;
    } else {
      j = j - 1;
    }
  }

  return numbers[i];
}

const nums29 = [3, 4, 5, 1, 2];

console.log(minArray(nums29));

```

