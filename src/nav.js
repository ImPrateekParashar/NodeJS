const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(" Welcome to Home Page");
});

app.get('/about', (req, res) => {
    res.send("Hello I'm Prateek.. Nice Meeting you all :)");
});

app.get('/contact', (req, res) => {
    res.send(" Contact Us :- 123456789 ");
});

app.get('/help', (req, res) => {
    res.send("May i help you?");
});

app.get('/api', (req, res) => {
    res.send({
            id : 1,
            name : "Prateek"
    });
});

app.listen(85, () => {
    console.log("Server is listening on 85");
});