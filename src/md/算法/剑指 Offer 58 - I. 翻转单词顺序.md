```typescript
// 剑指 Offer 58 - I. 翻转单词顺序

function reverseWords(s: string): string {
    s = s.trim();
    let j = s.length - 1, i = j;
    let result = ''

    while (i >= 0) {
        while (i >= 0 && s.charAt(i) !== ' ') i--;
        result += s.substring(i + 1, j + 1) + ' ';
        while (i >= 0 && s.charAt(i) === ' ') i--;
        j = i;
    }

    return result.trim();
}
```

