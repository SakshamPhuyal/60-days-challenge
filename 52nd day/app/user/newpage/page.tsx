import React from 'react'
import Link from 'next/link'
const Newpage = () => {
  return (
<div className="min-h-screen bg-cyan-300 flex flex-col items-center justify-center">
<p className="text-4xl font-extrabold ">
Leapfrog 60 Days Challenge
</p>
<p className='mt-4 font-bold text-3xl'>
Day 52nd
</p>
<button className='text-2xl border-2px w-50 h-10 rounded-2xl mt-5 cursor-pointer bg-amber-200'>
<Link href="/user">User</Link>
</button>
</div>
  )
}
export default Newpage
