```typescript
// 剑指 Offer 42. 连续子数组的最大和

function maxSubArray(nums: number[]): number {
    const length = nums.length;
    // const result: number[] = new Array(length).fill(0);

    for (let i = 1; i < length; i++) {
        if (nums[i - 1] > 0) {
            nums[i] = nums[i] + nums[i - 1]
        }
    }

    return Math.max(...nums)
}
```

