---
group:
  title: useState
---


# useState

## 使用说明
* useState 就是一个 Hook
* 通过在函数组件里调用它来给组件添加一些内部 state,React 会在重复渲染时保留这个 state
* useState 会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。它类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并
- useState 唯一的参数就是初始 state
  - 返回一个 state，以及更新 state 的函数
  - 在初始渲染期间，返回的状态 (state) 与传入的第一个参数 (initialState) 值相同
  - setState 函数用于更新 state。它接收一个新的 state 值并将组件的一次重新渲染加入队列

## 基本用法
`const [state, setState] = useState(initialState);`

### demo
<!-- <code src="./demo/demo1.jsx"> -->


## 每次渲染都是独立的闭包
- 每一次渲染都有它自己的 Props and State
- 每一次渲染都有它自己的事件处理函数
- alert会“捕获”我点击按钮时候的状态。
- 我们的组件函数每次渲染都会被调用，但是每一次调用中number值都是常量，并且它被赋予了当前渲染中的状态值
- 在单次渲染的范围内，props和state始终保持不变

<!-- <code src="./demo/demo2.jsx" /> -->

## 函数式更新
- 如果新的 state 需要通过使用先前的 state 计算得出，那么可以将函数传递给 setState。该函数将接收先前的 state，并返回一个更新后的值

<code src="./demo/demo3.jsx">
