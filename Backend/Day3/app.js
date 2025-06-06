const express = require('express');
const app = express();

const userModel = require('./userModel');

app.get('/', (req, res) => {
    res.send("hey")
});

//we need to use asynchornous code always for mongoose
app.get('/create', async (req, res) => {
    let createduser = await userModel.create({
        name: "harsh",
        email: "mruganksha@gmail.com",
        username: "mkudake"
    })
    res.send(createduser);
});

//update : userModel.findOneUpdate(findone, update, {new: true})
app.get('/update', async (req, res) => {
    let updateduser = await userModel.findOneAndUpdate({username: "mruganksha"}, {name: "mruganksha kudake"}, {new: true})
    res.send(updateduser);
});

//read: there r two ways  one reading whole or only single mentioned one
app.get('/read', async (req, res) => {
   let users = await userModel.find(); //by find() you can read all at a time
   res.send(users);
});  

//userModel.findOne({username: "annnd"}); //this will give only that specified
//find() always gives a array even if it is empty

//delete:
app.get('/delete', async (req, res) => {
    let users = await userModel.findOneAndDelete({username: "mkudake"}); 
   res.send(users);
});

app.listen(3000);