import React, { useState } from 'react';
function Mycomponent(){
    const [name,setName]=useState();
    const updateName=()=>{
        setName("Saksham");
    };
    const[age,setAge]=useState(0);
    const updateAge=()=>{
setAge(age+1);
    };
    const [isEmployed,setIsEmployed]=useState(false);
const toggleEmployStatus=()=>{
    setIsEmployed(!isEmployed);
};
    return(<div>
 <p>Name:{name}</p>
        <button onClick={updateName}>Set Name</button>
                <p>Age:{age}</p>
        <button onClick={updateAge}>Set Age</button>
                <p>Is Employed:{isEmployed?"yes":"No"}</p>
        <button onClick={toggleEmployStatus}>Toggle status</button>
        </div> 
    );
}
export default Mycomponent;
