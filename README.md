# hooks_docs

## hooks 学习记录

### 1. React Hooks
- Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性
- 如果你在编写函数组件并意识到需要向其添加一些 state，以前的做法是必须将其它转化为 
   class。现在你可以在现有的函数组件中使用 Hook
### 2. 解决的问题
- 在组件之间复用状态逻辑很难,可能要用到render props和高阶组件，React 需要为共享状态逻辑提供更好的原生途径，Hook 使你在无需修改组件结构的情况下复用状态逻辑
- 复杂组件变得难以理解，Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据）
- 难以理解的 class,包括难以捉摸的this
### 3. 注意事项
- 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
- 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用


## Getting Started

Install dependencies,

```bash
$ npm i
```

Start the dev server,

```bash
$ npm start
```

Build documentation,

```bash
$ npm run docs:build
```

Build library via `father-build`,

```bash
$ npm run build
```
