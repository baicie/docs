```typescript
// 剑指 Offer 50. 第一个只出现一次的字符

function firstUniqChar(s: string): string {
  const map = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      let acount = map.get(s[i]);
      map.set(s[i], ++acount);
    } else {
      map.set(s[i], 1);
    }
  }
  for (const c of s) {
    if (map.get(c) === 1) {
      return c;
    }
  }
  return " ";
}

const s1 = "abaccdeff";
console.log(firstUniqChar(s1));

```

