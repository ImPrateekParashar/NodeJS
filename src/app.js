const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();


// built-in middleware
console.log(path.join(__dirname, "../public"));

// to use the view engine

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialPath = path.join(__dirname,"../templates/partials");

app.set("view engine", 'hbs');
app.set("views",templatePath);
hbs.registerPartials(partialPath);



//console.log(path.join(__dirname,"../templates"));


//app.use(express.static(staticPath));

// Template engine route 
app.get('/', (req, res) => {
    res.render("index", {
        channelName : "Akhil",
    });
});

app.get('/', (req, res) => {
    res.send("Welcome to the index");
});


app.listen(85, () =>{
    console.log("Server is listening on 85");
})