'use client'
import { TodoContext } from '@/context/todo-provider'
import React, { useContext } from 'react'

function Navbar() {
  const {todos} = useContext(TodoContext)

  return (
    <div className='flex justify-between items-center'>
      <div>logo</div>
      <nav>
        <ul className='flex space-x-4'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div>{todos.length} todo</div>
    </div>
  )
}

export default Navbar