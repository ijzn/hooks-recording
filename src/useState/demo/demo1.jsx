import { useState } from 'react';
import { Button } from "antd"
function Counter(){
  const [number,setNumber] = useState(0);
  return (
      <>
          <p>{number}</p>
          <Button onClick={()=>setNumber(number+1)}>+</Button>
      </>
  )
}
export default Counter;
