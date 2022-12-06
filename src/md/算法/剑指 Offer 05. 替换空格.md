```typescript
// 剑指 Offer 05. 替换空格

function replaceSpace(s: string): string {
    const reg = new RegExp(/[ ]/g)
    return s.replace(reg,'%20')
};
```

