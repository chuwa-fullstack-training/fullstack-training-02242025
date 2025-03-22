import {useState} from 'react';

const Calculator = () => {
    [number, setNumber] = useState(0);

    return <div style={{display: "flex"}}>
        <div>
            <button onClick={()=>setNumber((prev)=>prev+1)}>+1</button>
            <button onClick={()=>setNumber((prev)=>prev+10)}>+10</button>
            <button onClick={()=>setNumber((prev)=>prev+100)}>+100</button>
            <button onClick={()=>setNumber((prev)=>prev+1000)}>+1000</button>
        </div>
        <span>{number}</span>
    </div>
}

export default Calculator;