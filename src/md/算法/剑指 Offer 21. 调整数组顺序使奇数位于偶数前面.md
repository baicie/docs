```typescript
// 剑指 Offer 21. 调整数组顺序使奇数位于偶数前面

function exchange(nums: number[]): number[] {
    let left = 0, right = nums.length - 1, temp;
    while (left < right) {
        while (left < right && nums[left] % 2) {
            left++;
        }
        while (left < right && !(nums[right] % 2)) {
            right--;
        }

        temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
    }

    return nums;
}
```

