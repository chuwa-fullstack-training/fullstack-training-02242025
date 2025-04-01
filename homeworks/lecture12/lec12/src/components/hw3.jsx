import React,{ useState } from "react";

function Hw3(){
    const [count, setCount] = useState(0);
    return (<div>
        
        <button onClick={()=>setCount(count+1)}>+1</button>
        <button onClick={()=>setCount(count+10)}>+10</button>
        <button onClick={()=>setCount(count+100)}>+100</button>
        <button onClick={()=>setCount(count+1000)}>+1000</button>
        <h1>{count}</h1>
    </div>)
}
export default Hw3;