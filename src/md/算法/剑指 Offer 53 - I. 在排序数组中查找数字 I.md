```typescript
// 剑指 Offer 53 - I. 在排序数组中查找数字 I

// function search(nums: number[], target: number): number {
//     // 查找右边界
//     let i = 0, j = nums.length - 1;
//     while (i < j) {
//         const m = Math.floor((i + j) / 2);
//         if (nums[m] <= target) {
//             i = m + 1;
//         } else {
//             j = m - 1;
//         }
//     }

//     const right = i;
//     console.log(right);
//     if (j >= 0 && nums[j] !== target) {
//         return 0;
//     }
//     i = 0, j = nums.length - 1;
//     while (i < j) {
//         const m = Math.floor((i + j) / 2);
//         if (nums[m] < target) {
//             i = m + 1;
//         } else {
//             j = m - 1;
//         }
//     }
//     const left = j;
//     console.log(right,left);
//     return right - left - 1;
// };

function search(nums: number[], target: number): number {
  return helper(nums, target) - helper(nums, target - 1);

  function helper(nums: number[], tar: number): number {
    let i = 0,
      j = nums.length - 1;
    while (i <= j) {
      const m = Math.floor((i + j) / 2);
      if (nums[m] <= tar) {
        // 太小去右半区
        i = m + 1;
      } else {
        j = m - 1;
      }
    }
    // console.log(i)
    return i;
  }
}

const nums26 = [1],
  target9 = 1;

console.log(search(nums26, target9));

```

