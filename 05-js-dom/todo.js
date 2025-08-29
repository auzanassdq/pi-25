let inputTodo = document.getElementById("input-todo")
let btnAdd = document.getElementById("add-todo")
let todoList = document.getElementById("todo-list")

let todos = []

btnAdd.addEventListener("click", (event) => {
    event.preventDefault()

    console.log(inputTodo.value)
    todos.push(inputTodo.value)

    console.log(todos)
    
    showTodo()

    // let newTodo = document.createElement("li")
    // newTodo.innerText = inputTodo.value
    // todoList.appendChild(newTodo)
})

function showTodo() {
    todoList.innerHTML = ""

    for (let i = 0; i <todos.length; i++){
        todoList.innerHTML += `
            <li>${todos[i]} <span onclick="deleteTodo(${i})">❌</span></li>
        `
    }
}

function deleteTodo (index) {
    console.log("delete", index)
    todos.splice(index, 1)

    showTodo()
}