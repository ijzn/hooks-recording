---
title: useReducer
order: 1
group:
  title: 进阶
  path: advanced
  order: 2
---
# useReducer

## 使用场景
- useState 的替代方案.它接受一个形如(state, action) => newState 的reducer，并返回当前的state以及与其配套的dispatch方法。
- 在某些场景下，useReducer比useState 更适用。 例如state逻辑比较复杂并且包含多个子值，或者下一个state依赖之前的state等。 

## 基本用法
```
const [state, dispatch] = useReducer(reducer, initiaArg, init)
```
## 参数说明
* initiaArg： 指定初始 state
* init：惰性初始化，需要将 init 函数作为 useReducer 的第三个参数传入，这样初始 state 将被设置为 init(initialArg)。
  * 好处：用于计算 state 的逻辑提取到 reducer 外部，这也为将来对重置 state 的 action 做处理提供了便利
* useReducer中的第二个参数和第三个参数都有的情况下，第三个参数的返回值会覆盖第二个参数。


<code src="./demo/demo1.jsx" />
