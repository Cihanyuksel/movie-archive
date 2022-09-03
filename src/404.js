import React from 'react'
import { Link } from 'react-router-dom'

export default function Page404() {
  return (
    <div className='w-full h-[300px] flex flex-col items-center justify-center gap-y-5'>
        <div className='flex justify-center items-center gap-x-4'>
            <div className='font-extrabold tracking-wider text-3xl mb-1'>404</div>
            <div className='border-x-[1.5px] h-10 border-slate-700'></div>
            <h1 className='text-3xl font-text font-light'>This page could not be found.</h1>
        </div>
        <Link to='/' className='bg-zinc-700 w-16 p-1 text-center text-white  rounded-sm'>Home</Link>
    </div>
  )
};