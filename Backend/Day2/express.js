const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public'))); //means static ch sgla will be in public
app.use('/files', express.static(path.join(__dirname, 'files')))
app.set('view engine', 'ejs'); //this line tells from where we are supposed to render the frontend

//this 2 lines are parsers
//readable format mein available hoga from this
//we can use form by those 2 lines

//when we write something like username email while login those details are saved on server but in unreadable format like blob(in hexadecimal format)
//means we send a plain text and server contains blob contain in unreadable format

app.get("/", function(req, res){
    fs.readdir('./files', function(err, files){
        res.render("index", {files: files}); //send details of files in the upper files
    })
});

//this is used when we click on readmore to open a particular task
app.get("/files/:filename", function(req, res){
    //readFile
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err, filedata){
        res.render('show', {filename: req.params.filename, filedata: filedata});
    })
});
//utf-8 makes the data visible in english , if its not used then it will appear in binary

app.get("/edit/:filename", function(req, res){
    res.render('edit', {filename: req.params.filename});
});//now we need to see the name in previous tab so call it
//to edit

app.post("/edit", function(req, res){
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`, function(err){
        res.redirect("/");
    })
});

//we can only see the data in input and textarea when u provide a name
app.post("/create", function(req, res){
    //now create file
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
        res.redirect("/");
    })
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
