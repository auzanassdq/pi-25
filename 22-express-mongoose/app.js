const express = require('express');
const app = express();
const allRoutes = require('./routes');
const connectToDb = require('./config/db');

const PORT = 3000 || process.env.PORT;

// Connect to MongoDB
connectToDb();

app.use(express.json());
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.use(allRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});