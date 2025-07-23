'use client'
import React from 'react'

const AddToCart = () => {
  return (
<div>
<button className='h-20 w-30 pointer:cursor rounded-xl bg-amber-300 border-2' 
onClick={()=>console.log("click me.")}>
Add to cart
</button>
</div>
  );
};

export default AddToCart
