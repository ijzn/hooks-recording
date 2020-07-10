---
order: 2
group:
  title: useEffect
  path: /basic
---
# useEffect
-  React 会等待浏览器完成画面渲染之后才会延迟调用 useEffect.

## 基本用法
```
useEffect(didUpdate);
```

## 运行时机
- 默认情况下，effect 将在每轮渲染结束后执行，
  - useEffect里的函数会在组件挂载完成后，或者组件更新完成后进行调用.

## 清除 effect
- 副作用函数还可以通过返回一个函数来指定如何清除副作用
- 为防止内存泄漏，清除函数会在组件卸载前执行。另外，如果组件多次渲染，则在执行下一个 effect 之前，上一个 effect 就已被清除
```
useEffect(() => {
    // doSomething ...
    //useEffect会返回一个清理函数，当组件将要卸载的时候会执行清理函数
    return () => {
      // doSomething
    }
});

```

## 跳过 Effect 进行性能优化
- 如果某些特定值在两次重渲染之间没有发生变化，你可以通知 React 跳过对 effect 的调用，只要传递数组作为 useEffect 的第二个可选参数即可
- 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行
```
function Counter(){
  const [number,setNumber] = useState(0);
  // 相当于componentDidMount 和 componentDidUpdate
  useEffect(() => {
     console.log('开启一个新的定时器')
     const $timer = setInterval(()=>{
      setNumber(number=>number+1);
     },1000);
  },[]);
  return (
      <>
          <p>{number}</p>
      </>
  )
}
```

<code src="./demo/demo1.jsx" />
