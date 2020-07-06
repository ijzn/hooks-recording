import React, { useReducer, useCallback } from 'react';
import { Button } from 'antd';
let initialState = { number: 0 };
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
function reducer(state, action) {
    switch (action.type) {
        case INCREMENT:
            return { number: state.number + 1 };
        case DECREMENT:
            return { number: state.number - 1 };
        default:
            return state;
    }
}

function init(params) {
  return {number: 1}
}

//叫自定义hooks
function useState(initialState) {
  const reducer = useCallback((state, action) => action);
  let [state, dispatch] = useReducer(reducer, initialState);
  function setState(payload) {
      dispatch(payload);
  }
  return [state, setState];
}



function App() {
    // let [state, setState] = useState(initialState)
    let [state, dispatch] = useReducer(reducer, initialState, init);
    return (
        <div>
            <p>{state.number}</p>
            <Button onClick={() => dispatch({ type: INCREMENT })}>+</Button>
            <Button onClick={() => dispatch({ type: DECREMENT })}>-</Button>
            {/* <div>userState</div>
            <Button onClick={() => setState({number: state.number + 1})}>+</Button>
            <Button onClick={() => setState({ number: state.number - 1 })}>-</Button> */}
        </div>
    )
}

export default App;

