const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user');

//we are creating a app of users where they wil be stored in database which will be displayed on screen
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render("index") //this is server side rendering
});

app.get('/read', async (req, res) => {
    let users = await userModel.find();
    res.render("read", {users});
});

app.get('/delete/:id', async (req, res) => {
    let users = await userModel.findOneAndDelete({_id: req.params.id});
    res.redirect("/read");
});

app.post('/create', async (req, res) => {
    let {name, email, image} = req.body;
    try {
    let createdUser = await userModel.create({ name, email, image });
    res.redirect("/read");
  } catch (err) {
    res.status(500).send("User creation failed: " + err.message);
  }
    //user is created
});



app.listen(3000);