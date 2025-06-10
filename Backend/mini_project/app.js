const express = require('express');
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get("/", (req, res) => {
   res.render("index");
})

app.get("/login", (req, res) => {
   res.render("login");
})

app.get("/post", isLoggedIn, async (req, res) => {
    let user = await userModel.findOne({email: req.user.email});
    let {content} = req.body;

    let post = await postModel.create({
        user: user._id,
        content
    })
    user.posts.push(post._id);
    await user.save();
    res.redirect("/profile")
})
//this two should be visible after login so that function is included
app.get("/profile", isLoggedIn, async (req, res) => {
    let user = await userModel.findOne({email: req.user.email}).populate("posts");
   res.render("profile", {user});
})

app.post("/register", async (req, res) => {
   //now 1st check if there exists a user already by that name
   let {email, password, name, username, age} = req.body;

   let user = await userModel.findOne({email})
   if(user){
    return res.status(500).send("User already registered!");
   }

   bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        userModel.create({
            username,
            email,
            age,
            name,
            password: hash
        });
        let token = jwt.sign({email: email, userid: user.username  }, "shhh");
        res.cookie("token", token);
        res.send("Registered")
    })
   })
})

app.post("/login", async (req, res) => {
   //now 1st check if there exists a user already by that name
   let {email, password} = req.body;

   let user = await userModel.findOne({email})
   if(!user){
    return res.status(500).send("Opps! Something Went Wrong");
   }

   //now check if pw is correct
   bcrypt.compare(password, user.password, function(err, result){
    if(result){
        let token = jwt.sign({email: email, userid: user.username}, "shhh");
        res.cookie("token", token);
        res.status(200).redirect("/profile");
    } else{
        res.status(401).send("Password or Username is wrong");
        res.send("Password or Username is wrong")
    }
   })
})

app.get("/logout", (req, res) => {
    res.cookie("token", "");
   res.redirect("/");
})

function isLoggedIn(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.redirect("/login");
    }

    try {
        const data = jwt.verify(token, "shhh");
        req.user = data;
        next();
    } catch (err) {
        console.error("JWT error:", err.message);
        res.redirect("/login");
    }
}


app.listen(3000);