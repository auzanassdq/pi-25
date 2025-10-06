import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Home from './page'
import TodoProvider from '@/context/todo-provider'

describe('Home', () => {
  it('should render home page with all components', () => {
    render(
      <TodoProvider>
        <Home />
      </TodoProvider>
    )

    // Check if Home title exists
    const homeTitle = screen.getByRole('heading', { name: 'Home', level: 1 })
    expect(homeTitle).toBeInTheDocument()

    // Check if Navbar exists
    const navbar = screen.getByRole('navigation')
    expect(navbar).toBeInTheDocument()

    // Check if Todo component exists
    const todoInput = screen.getByPlaceholderText('Add a new todo')
    expect(todoInput).toBeInTheDocument()

    const addButton = screen.getByRole('button', { name: 'Add' })
    expect(addButton).toBeInTheDocument()
  })

  it('should be able to add new todo', () => {
    render(
      <TodoProvider>
        <Home />
      </TodoProvider>
    )

    // Get the input field and add button
    const todoInput = screen.getByPlaceholderText('Add a new todo')
    const addButton = screen.getByRole('button', { name: 'Add' })

    // Type new todo
    fireEvent.change(todoInput, { target: { value: 'Belajar Testing' } })
    expect(todoInput.value).toBe('Belajar Testing')

    // Add new todo
    fireEvent.click(addButton)

    // Check if new todo is added
    const newTodo = screen.getByText('Belajar Testing')
    expect(newTodo).toBeInTheDocument()

    // Check if input is cleared after adding
    expect(todoInput.value).toBe('')
  })
})
