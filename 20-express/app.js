const express = require('express');
const app = express();

const AllRouter = require('./routes/index');
const port = 3000 || process.env.PORT;

app.use(AllRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
