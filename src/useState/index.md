---
title: useState
order: 1
group:
  title: 基础
  path: /basic
  order: 1
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
```
const [state, setState] = useState(initialState);
```
### demo
<code src="./demo/demo1.jsx">

## 每次渲染都是独立的闭包
- 每一次渲染都有它自己的 Props and State
- 每一次渲染都有它自己的事件处理函数
- alert会“捕获”我点击按钮时候的状态。
- 我们的组件函数每次渲染都会被调用，但是每一次调用中number值都是常量，并且它被赋予了当前渲染中的状态值
- 在单次渲染的范围内，props和state始终保持不变

<code src="./demo/demo2.jsx" />

## 函数式更新
- 如果新的 state 需要通过使用先前的 state 计算得出，那么可以将函数传递给 setState。该函数将接收先前的 state，并返回一个更新后的值
  - 与类组件中的 setState 方法不同，useState 不会自动合并更新对象. 解决方案：
    - {...prevState, ...updatedValues} Object.assign也可以。
    - useReducer ，它更适合管理包含多个子值的 state(状态) 对象
```
setState(prevState => {
  // Object.assign 也是可行的
  return {...prevState, ...updatedValues};
});
```

<code src="./demo/demo3.jsx">

## 惰性初始化
- initialState 参数是初始渲染期间使用的状态。 在随后的渲染中，它会被忽略了。 
- 如果初始状态是高开销的计算结果，则可以改为提供函数，该函数仅在初始渲染时执行。
- 🌰  见函数式更新的demo
```
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});
```
## 性能优化
### Object.is
- 调用 State Hook 的更新函数并传入当前的 state 时，React 将跳过子组件的渲染及 effect 的执行。（React 使用 Object.is 比较算法 来比较 state。
  
<code src="./demo/demo4.jsx" />

### 减少渲染次数
- 把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新
```
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

- 把创建函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算

```
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

 [useCallback 与 useMemo 区别](https://github.com/monsterooo/blog/issues/37)

- 相同点：
  - 缓存函数的引用或值
- 不同点
  - useCallback 缓存的是函数的引用。
    - 使用场景：优化子组件渲染次数
  - useMemo 缓存的是计算数据的值
    - 使用场景：优化针对于当前组件高开销的计算，具有记忆功能


<code src="./demo/demo5.jsx">

