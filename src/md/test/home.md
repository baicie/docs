---
category: "test"
title: "docs"
---

# 快速上手

Ant Design Vue 致力于提供给程序员**愉悦**的开发体验。

> 在开始之前，推荐先学习 [Vue](https://www.vuejs.org/) 和 [ES2015](http://babeljs.io/docs/learn-es2015/)，并正确安装和配置了 [Node.js](https://nodejs.org/) v8.9 或以上。官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 Vue 的正确开发方式。如果你刚开始学习前端或者 Vue，将 UI 框架作为你的第一步可能不是最好的主意。

## 在线演示

## 注意事项

```ts
// 剑指 Offer 03. 数组中重复的数字

function findRepeatNumber(nums: number[]): number {
  const map = new Map<number, number>();

  for (let num of nums) {
    // console.log(num)
    if (map.has(num)) return num;
    else map.set(num, num);
  }
  return -1;
}

const nums25 = [2, 3, 1, 0, 2, 5, 3];
console.log(findRepeatNumber(nums25));
```
