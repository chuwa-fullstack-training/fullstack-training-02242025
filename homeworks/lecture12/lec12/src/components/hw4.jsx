import React,{ useState } from "react";

function Hw4(){
    const [input, setInput] = useState("");
    const [res, setRes] = useState("");

    function handleChange(e){
        const val = e.target.value;
        setInput(val);
        setRes(formatInput(val));
    }

    function formatInput(e){
        const n = parseInt(e);
        if(!isNaN(n)){
            const lastDigit = n%10;
            const lastTwo = n%100;
            if(lastTwo>=11 && lastTwo<=13) return `${n}th`;
            switch(lastDigit){
                case 1: return `${n}st`;
                case 2: return `${n}nd`;
                case 3: return `${n}rd`;
                default: return `${n}th`;
            }
        }
        return e;
    }

    return (<div style={{margin:'10px 10px 10px 10px'}}>
        
        <input
        type="text"
        value={input}
        onChange={handleChange}></input>
        <input value={res}></input>
    </div>)
}
export default Hw4;