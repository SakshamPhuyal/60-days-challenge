import React,{useState} from "react";
function Todolist(){
    const [task,setTask]=useState([]);
const [newTask,setNewTask]=useState([]);
function handleTask(event){
setNewTask(event.target.value);
}
function addTask(){
    if(newTask.trim()!==""){
setTask(t=>[...t,newTask]);
setNewTask("");
}
}
function removetask(index){
const updatedTask=task.filter((_,i)=>i!==index);
setTask(updatedTask);
}
function moveTaskup(index){
if(index>0){
    const updatedTask=[...task];
    [updatedTask[index],updatedTask[index-1]]=
    [updatedTask[index-1],updatedTask[index]];
    setTask(updatedTask);
}
}
function moveTaskdown(index){
const updatedTask=[...task];
[updatedTask[index],updatedTask[index+1]]=
[updatedTask[index+1],updatedTask[index]];
setTask(updatedTask);
}
return(
    <div className="to-do-list">
        <div className="box">
        <h1>To-Do-List</h1>
<input type="text" value={newTask} onChange={handleTask} placeholder="Enter a task"/>
    <button onClick={addTask} className="add-button">Add</button>
    </div>
        <ol>
        {
        task.map((task,index)=>
        <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={()=>removetask(index)}>
            Delete
            </button>
            <button className="move-button" onClick={()=>moveTaskup(index)}>
☝️
            </button>
              <button className="move-button" onClick={()=>moveTaskdown(index)}>
👇
            </button>
        </li>
        )}
    </ol>
    </div>
);
    
}
export default Todolist