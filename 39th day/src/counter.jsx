import React,{useState}from 'react';
function Counter(){
    const [count,setCount]=useState(0);
    const countIncrement =()=>{
        setCount(count+1);
    }
    const countDecrement=()=>{
        setCount(count-1);
    }
const countReset=()=>{
    setCount(0)
}
    return(
        <div className="container">
            <p className="paara">{count}</p>
            <button className="but" onClick={countIncrement}>Increment</button>
                 <button className="but"  onClick={countReset}>Reset</button>
             <button className="but" onClick={countDecrement}>Decrement</button>
        </div>
    );
}
export default Counter 
