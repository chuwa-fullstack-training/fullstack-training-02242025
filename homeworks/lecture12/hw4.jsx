import ordinal from 'ordinal';
import {useState} from 'react';

const Converter = () => {
    const [value,setValue] = useState("");
    const [converted, setConverted] = useState("");
    const handleConversion = (e) => {
        const input = e.target.value;
        setValue(input);
        const num = parseInt(input);
        if(isNaN(num)){
            setConverted(num);
        }else{
            setConverted(ordinal(num))
        }
    }
    return <div>
        <input type="text" value={value} onChange={
            (e)=>handleConversion(e)}/>
        <span>{converted}</span>
    </div>
}

export default Converter;