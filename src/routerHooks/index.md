---
title: 路由hooks
order: 15
group:
  title: 路由hooks
---

# 路由hooks

## 1. useParams
- 获取路由中的params

老版
```
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Post({ match }) {
  let { title } = match.params;
  return <div>{title}</div>;
}

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route path="/post/:title" component={Post} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
```

新版
```
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";

function Post() {
  let { title } = useParams();
  return <div>{title}</div>;
}

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route path="/post/:title"><Post /></Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
```

## 2. useLocation
- 可以查看当前路由

老版
```
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Post({ match, location }) {
  let { title } = match.params;
  return <div>{title}{JSON.stringify(location)}</div>;
}

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route path="/post/:title" component={Post} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
```

新版
```
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, useParams, useLocation } from "react-router-dom";

function Post() {
   let { title } = useParams();
  const location = useLocation();
  return <div>{title}<hr />{JSON.stringify(location)}</div>;
}

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route path="/post/:title"><Post /></Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
```

## 3. useHistory
-  可以返回上一页
新版
```
import { useHistory } from "react-router-dom";

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}
```

## 4. useRouteMatch
- useRouteMatch挂钩尝试以与Route相同的方式匹配当前URL
- 在无需实际呈现Route的情况下访问匹配数据最有用

老版
```
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function NotFound() {
  return <div>Not Found</div>
}
function Post(props) {
  return (
    <div>{props.match.params.title}</div>
  )
}
function App() {
  return (
    <div>
      <Route
        path="/post/:title"
        strict
        sensitive
        render={({ match }) => match ? <Post match={match} /> : <NotFound />}
      />
    </div>
  )
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
```
