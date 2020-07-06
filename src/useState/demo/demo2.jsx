import { useState } from 'react';
import { Button } from "antd"

function Counter2(){
  const [number,setNumber] = useState(0);
  function alertNumber(){
    setTimeout(()=>{
      alert(number);
    },3000);
  }
  return (
      <>
          <p>{number}</p>
          <Button onClick={()=>setNumber(number+1)}>+</Button>
          <Button onClick={alertNumber}>alertNumber</Button>
      </>
  )
}
export default Counter2;
