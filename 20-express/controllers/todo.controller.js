const todoModel = require('../models/todo');

module.exports = {
  getAllTodo: (req, res) => {
    res.json({
      message: 'List of todos',
      data: todoModel,
    })
  },
  getTodoById: () => {},
  createTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
}