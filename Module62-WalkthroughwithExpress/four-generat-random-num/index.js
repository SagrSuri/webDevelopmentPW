const express = require('express');
const app = express();
const port = 3000;

// Route to serve a basic webpage at the root path
app.get('/', (req, res) => {
    res.send('<h1>Hello, this is the homepage!</h1>');
});

// Route to generate and send a random number
app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.json({ random: randomNumber });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
