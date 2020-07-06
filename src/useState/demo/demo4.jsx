import { useState } from 'react';
import { Button } from "antd"

export default () => {
    const [counter,setCounter] = useState({name:'计数器',number:0});
    console.log('render Counter')
    return (
        <>
            <p>{counter.name}:{counter.number}</p>
            <Button onClick={()=>setCounter({...counter,number:counter.number+1})}>+</Button>
            <Button onClick={()=>setCounter(counter)}>-</Button>

        </>
    )
}
