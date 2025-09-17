// DOM Elements
const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

// API URL
const API_URL = 'https://5e8e9d60e0e7de001685f875.mockapi.io/todos';

// Fetch and display todos
async function fetchTodos() {
    try {
        const response = await fetch(API_URL);
        const todos = await response.json();
        displayTodos(todos);
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}

// Display todos in the DOM
function displayTodos(todos) {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.textContent = todo.todo || todo.title; // some APIs use 'todo', others use 'title'
        todoList.appendChild(li);
    });
}

// Add new todo
async function addTodo(todoText) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                todo: todoText,
                completed: false
            })
        });
        const newTodo = await response.json();
        // Refresh the todo list
        fetchTodos();
        // Clear input
        todoInput.value = '';
    } catch (error) {
        console.error('Error adding todo:', error);
    }
}

// Event Listeners
addButton.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    if (todoText) {
        addTodo(todoText);
    }
});

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const todoText = todoInput.value.trim();
        if (todoText) {
            addTodo(todoText);
        }
    }
});

// Initial load of todos
document.addEventListener('DOMContentLoaded', fetchTodos);