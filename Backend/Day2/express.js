const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public'))); //means static ch sgla will be in public
app.set('view engine', 'ejs'); //this line tells from where we are supposed to render the frontend

//this 2 lines are parsers
//readable format mein available hoga from this
//we can use form by those 2 lines

//when we write something like username email while login those details are saved on server but in unreadable format like blob(in hexadecimal format)
//means we send a plain text and server contains blob contain in unreadable format

app.get("/", function(req, res){
    res.render("index");
});

app.listen(3000, function(){
    console.log("It is running");
});

app.get("/profile/:username", function(req, res){
    req.params.username
    res.send(`welcome, ${req.params.username} `)
})

app.get("/profile/:username/:age", function(req, res){
    req.params.username
    res.send(`welcome, ${req.params.username} `)
})

//console.log(_dirname) : it gives directory of file
//console.log(_dirname + '/public') then public folder will be added in that dir
//path.join also does the something, its more safer
