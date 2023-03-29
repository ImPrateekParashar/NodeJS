const path = require('path');
const express = require("express");
const hbs = require('hbs');

const app = express();

//Absolute path
//console.log(__dirname);

//console.log(path.join(__dirname, "../public"))

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//to set the view engine
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);

app.set("views",templatePath)

// Built-in Middleware
app.use(express.static(staticPath));

//template engine route 
app.get('/', (req, res) =>{
    res.render("index",{
        channelName : "Parashar"
    });
});

app.get('/nav', (req, res) =>{
    res.render("nav");
});

app.get('/about', (req, res) =>{
    
    res.render("about", {
        name : req.query.name,
        city : req.query.city,
    });
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

app.get('/about/*',(req, res) => {
    res.render('404', {
        errorcomment : "Sorry this page doesn't exist!!!"
    });
});

app.get('*',(req, res) => {
    res.render('404', {
        errorcomment : "Page not found!!!"
    });
});


app.listen(85, () => {
    console.log("Server is listening on 85");
});

