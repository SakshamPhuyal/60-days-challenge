import React from 'react'
interface props{
    params:{id:number}
}
const detailpage = ({params:{id}}:props) => {
  return (
    <div  className="flex flex-col justify-center items-center bg-gray-700 text-white min-h-screen text-3xl">
    <p className="text-4xl font-extrabold">#60DaysOfLearning2025</p>
    <p className="text-4xl font-extrabold mb-5">Day 54</p>
    userdetails {id}
    </div>
  )
}

export default detailpage
