let inputTodo = document.getElementById("input-todo")
let btnAdd = document.getElementById("add-todo")
let todoList = document.getElementById("todo-list")

btnAdd.addEventListener("click", (event) => {
    event.preventDefault()
    console.log(inputTodo.value)
    
    todoList.innerHTML += `
        <li>${inputTodo.value} <span onclick="deleteTodo()">❌</span></li>
    `

    // let newTodo = document.createElement("li")
    // newTodo.innerText = inputTodo.value
    // todoList.appendChild(newTodo)
})

function deleteTodo () {
    console.log("delete")
}