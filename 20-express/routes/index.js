const express = require('express');
const router = express.Router();

const todoRouter = require('./todo.router');

router.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
})

router.use('/todos', todoRouter)
router.use('/movies', () => {})
router.use('/users', () => {})

module.exports = router;