'use client'
import { TodoContext } from '@/context/todo-provider'
import React, { useContext, useState } from 'react'

function Todo() {
  const [input, setInput] = useState('')
  const {todos, addTodo, deleteTodo} = useContext(TodoContext)

  const handleAddTodo = (e) => {
    e.preventDefault()
    if (!input) return
    addTodo(input)
    setInput('')
  }

  return (
    <div className='py-20'>
      <form>
        <input type='text' placeholder='Add a new todo' value={input} onChange={e => setInput(e.target.value)} />
        <button type='submit' onClick={handleAddTodo}>Add</button>

      </form>

      <div>
        {todos.map(item => (
          <div className='flex gap-4' key={item.id}>
            <span>{item.task}</span>
            <button onClick={() => deleteTodo(item.id)}>Delete</button>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default Todo