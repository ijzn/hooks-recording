---
order: 8
group:
  title: useLayoutEffect
---

# useLayoutEffect
- 其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用 effect。可以使用它来读取 DOM 布局并同步触发重渲染。在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新。
- 尽可能使用标准的 useEffect 以避免阻塞视觉更新。

<img src="http://img.zhufengpeixun.cn/domrender.jpg">
