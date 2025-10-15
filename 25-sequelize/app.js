const express = require('express');
const app = express();
const port = 3000;
const { User } = require('./models');

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


