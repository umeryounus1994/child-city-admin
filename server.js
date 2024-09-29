const express = require('express');
const path = require('path');
const app = express();
console.log(__dirname)
app.use(express.static(path.join(__dirname, 'dist')));

// For all other routes, serve the index.html file from the React build folder
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});