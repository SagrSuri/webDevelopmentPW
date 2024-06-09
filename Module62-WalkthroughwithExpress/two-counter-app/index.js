const express = require('express');
const app = express();
const port = 3000;

// In-memory counter variable
let counter = 2;

// Middleware to parse JSON bodies
app.use(express.json());

// Route to get the current counter value
app.get('/', (req, res) => {
    res.json({ counter: counter });
});

// Route to increment the counter
app.post('/increment', (req, res) => {
    counter += 1;
    res.json({ counter: counter });
});

// Route to decrement the counter
app.post('/decrement', (req, res) => {
    counter -= 1;
    res.json({ counter: counter });
});

// Start the server
app.listen(port, () => {
    console.log(`Counter app listening at http://localhost:${port}`);
});
