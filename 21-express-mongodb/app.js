const express = require('express');
const { connectDB } = require('./config/db');
const todoRouter = require('./routes/todo.router');
const movieRouter = require('./routes/movie.router');

const app = express();
const PORT = 3000;

// Connect to MongoDB
connectDB().then(() => {
  console.log('Database connection ready');
}).catch((err) => {
  console.error('Database connection failed', err);
  process.exit(1);
});

app.use(express.json());

// Routes
app.use('/todos', todoRouter);
app.use('/movies', movieRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
