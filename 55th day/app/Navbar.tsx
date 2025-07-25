import React from 'react'
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className='flex bg-amber-200 h-10 p-2 font-bold'>
<Link href="/"className='mr-5'></Link>
   <Link href="/users" className='mr-5'>#60DaysOfLearning2025</Link>
    <Link href="/products" className='mr-5'>Day 55</Link>
    </div>
  )
}
export default Navbar
