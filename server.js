const express = require('express');
const fs = require('node:fs');
const path = require('node:path');

const app = express();
const port = 3000;

// Serve static files like mp4, css, etc.
app.use(express.static('public'));  // Create a 'public' folder for static files

app.get('/favicon.ico', (req, res) => res.status(204));

// Read the VTT file and modify it
app.get('/vtt', (req, res) => {
    const filePath = path.join(__dirname, 'subtitles.vtt');

    // Read the .vtt file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }

        // Example modification: replace a word in the subtitle text
        const modifiedData = data.replace(/Hello/g, 'Hi');

        // Send the modified .vtt content
        res.setHeader('Content-Type', 'text/vtt');
        res.send(modifiedData);
    });
});

// Serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

