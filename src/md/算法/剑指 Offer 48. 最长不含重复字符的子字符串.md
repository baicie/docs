```typescript
// 剑指 Offer 48. 最长不含重复字符的子字符串

function lengthOfLongestSubstring(s: string): number {
    const map = new Map<string, number>();

    let i = -1, result = 0;

    for (let j = 0; j < s.length; j++) {
        if (map.has(s.charAt(j))) {
            i = Math.max(i, map.get(s.charAt(j)))
        }
        map.set(s.charAt(j), j)
        // console.log(result, j - i, j, i)
        result = Math.max(result, j - i);
    }

    return result;
}

const str4 = 'bbbbbbbb'

console.log(lengthOfLongestSubstring(str4));
```

