import React,{useState} from "react";
function ColorPicker(){
    const [color,setColor]=useState("#4f5035");
    function handleColor(event){
        setColor(event.target.value);
    }
    return(
        <div className="color-picker-container">
            <h1 style={{color:color}}>Color Picker</h1>
            <div className="color-display" style={{backgroundColor:color}}>
                <p>Selected Color:{color}</p>
            </div>
            <label>
Select a Color:
            </label>
            <input type="color" value={color} onChange={handleColor}/>
            </div>
    );  
}
export default ColorPicker