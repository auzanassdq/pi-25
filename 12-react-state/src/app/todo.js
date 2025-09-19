import { useState } from "react"

export default function Todo() {
    const [input, setInput] = useState("")

    const [todos, setTodos] = useState([
        { id: 1, value: "belajar react" },
        { id: 2, value: "membuat todo" },
        { id: 3, value: "pusiiiiing.." },
    ])

    const handleInput = (event) => {
        setInput(event.target.value)
    }

    const addTodo = (event) => {
        event.preventDefault()
        console.log(input)
        let newTodo = {
            id: new Date(),
            value: input
        }
        setTodos([...todos, newTodo])
        setInput("")
    }

    const deleteTodo = (todo) => {
        console.log(todo);
    }

    const editTodo = (item) => {
        let editValue = prompt("silahkan edit", item.value)
        
    }

    return (
        <div className="mt-5">
            <form>
                <input type="text" value={input} onChange={handleInput} placeholder="input your todo here.." />
                <button onClick={addTodo}>Add</button>
            </form>

            <div>
                {todos.map((item) => (
                    <li key={item.id}>
                        <span className="mr-5">{item.value}</span>
                        <span onClick={() => editTodo(item)}>✏️</span>
                        <span onClick={() => deleteTodo(item)}>X</span>
                    </li>
                ))}
            </div >
        </div >
    )
}