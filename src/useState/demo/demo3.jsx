import { useState } from 'react';
import { Button } from "antd"

const initVale = () => {
  return {
    name: "张三",
    number: 0
  }
}

function Counter2(){
  const [{number, name},setNumber] = useState(initVale);
  return (
      <>
          <p>{number}</p>
          <p>{name}</p>
          <Button onClick={()=>setNumber(initVale)}>reset</Button>
          <Button onClick={() => setNumber(prevState => ({...prevState, number: prevState.number + 1}))}>+</Button>
          <Button onClick={() => setNumber(prevState => ({number: prevState.number - 1}))}>-</Button>
      </>
  )
}
export default Counter2;
