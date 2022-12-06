```typescript
// 剑指 Offer 58 - II. 左旋转字符串

function reverseLeftWords(s: string, n: number): string {
    const str = s.slice(0, n);
    const str2 = s.slice(n, s.length)
    return str2.concat(str)
};
```

