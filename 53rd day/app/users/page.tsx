import React from 'react'
import Link from 'next/link';
interface users{
  name:string;
  id:number;
}
const Userspage = async() => {
  const res= await fetch('https://jsonplaceholder.typicode.com/users');
  const users:users[]=await res.json();
  return (
  <div className="min-h-screen bg-black text-white p-5">

      <h1 className='text-2xl font-bold'>Users</h1>

      <ul>
        {users.map(user=>(<li key={user.id}>{user.name}</li>))}
      </ul>
    </div>
  )
}

export default Userspage
