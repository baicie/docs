```typescript
// 剑指 Offer 57. 和为s的两个数字
// 哈希表 双指针
function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const ac = target - nums[i];
        if (map.has(ac)) {
            return [nums[i], nums[map.get(ac)]]
        }
        map.set(nums[i], i);
    }

    return [-1, -1]
}
```

