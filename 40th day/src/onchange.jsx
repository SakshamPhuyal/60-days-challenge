import React,{useState} from 'react';
function ONchange(){
    const [name,setName]=useState("Guest");
    function handleNameChange(event){
setName(event.target.value);
    }
    const[quantity,setQuantity]=useState("0");
    function handleQuantitychange(event){
        setQuantity(event.target.value);
    }
    const[comment,setComment]=useState("");
    function handleComment(event){
        setComment(event.target.value);
    }
    const [payment,setPayment]=useState("Choose Compoulsory");
    function handlePayment(event){
        setPayment(event.target.value);
    }
    const [delivery,setDelivery]=useState("");
    function handleDelivery(event){
        setDelivery(event.target.value);
    }
return(<div>
    <input type="text" value={name} onChange={handleNameChange} placeholder='Write your name'/>
    <p>Name:{name}</p>
     <input type="number" value={quantity} onChange={handleQuantitychange} placeholder='Write quantity here' />
    <p>Quantity:{quantity}</p>
    <input type="textarea" value={comment} onChange={handleComment} placeholder='Add your comment'/>
    <p>Comment:{comment}</p>
    <select value={payment} onChange={handlePayment}>
<option value="">Select an option</option>
<option value="Cash">Cash</option>
<option value="Visa">Visa</option>
<option value="Master Card">Master Card</option>
    </select>
    <p>Payment Mode:{payment}</p>
    <label>
      <input type="radio" value="Pick Up" checked={delivery==="Pick Up"} onChange={handleDelivery}/>
      Pick Up
    </label>
     <label>
      <input type="radio" value="Delivery" checked={delivery==="Delivery"} onChange={handleDelivery}/>
      Delivery
    </label>
    <p>Shipping Method:{delivery}</p>
</div>);
}
export default ONchange