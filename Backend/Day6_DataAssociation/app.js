const express = require('express');
const app = express();
const userModel = require("./models/user")
const postModel = require("./models/post")

app.get("/", function(req, res){
   res.send("hey");
});

app.get("/create", async function(req, res){
    let user = await userModel.create({
        username: "mru",
        age: 19,
        email: "mru@gmail.com"
    })
    res.send(user);
})

app.get("/post/create", async function(req, res){
    let post = await postModel.create({
        postdata: "hello all",
        user: "6846b9d9e24cec760b9cc14c",
    })

    let user = await userModel.findOne({_id: "6846b9d9e24cec760b9cc14c"});
    user.posts.push(post._id);
    await user.save();
    res.send({post, user});
})

app.listen(3000);