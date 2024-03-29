import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='flex justify-around p-3 border-b border-zinc-800 items-center bg-[#1a1a1a]/90 text-zinc-300'>
      <Link to='/'><h1 className='text-3xl'>AuthDB</h1></Link>
      <ul className='flex gap-6 '>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>SignUp</Link>
      </ul>
    </nav>
  )
}

export default NavBar