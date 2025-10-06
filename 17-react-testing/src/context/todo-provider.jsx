'use client'
import { createContext, useState } from "react"

export const TodoContext = createContext()

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    {id: 1, task: 'belajar react', isDone: false},
    {id: 2, task: 'belajar state management', isDone: false},
    {id: 3, task: 'nyoba bikin context', isDone: false},
  ])

  const addTodo = (input) => {
    const todo = {id: todos.length + 1, task: input, isDone: false}
    setTodos([...todos, todo])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  
  return (
    <TodoContext.Provider value={{todos, setTodos, addTodo, deleteTodo}}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider