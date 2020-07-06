---
order: 7
group:
  title: useRef
---
# useRef

## 基本用法
- useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）
- 返回的 ref 对象在组件的整个生命周期内保持不变
```
const refContainer = useRef(initialValue);
```
<code src="./demo/demo1.jsx">


## [forwardRef](https://zh-hans.reactjs.org/docs/react-api.html#reactforwardref)
- 将ref从父组件中转发到子组件中的dom元素上
- 子组件接受props和ref作为参数

<code src="./demo/demo2.jsx">


## useImperativeHandle
- useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值
- 在大多数情况下，应当避免使用 ref 这样的命令式代码。useImperativeHandle 应当与 forwardRef 一起使用

