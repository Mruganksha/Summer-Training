const express = require('express');
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const upload = require("./config/multerconfig")
const path = require("path");
//const multer = require("multer");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

/*
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/images/uploads')
    }, //here we are setting file name
    filename: function(req, file, cb){
        crypto.randomBytes(12, function(err, bytes){
            //here 1st we made hexadecimal string and then added extension to it
            const fn = bytes.toString("hex") + path.extname(file.originalname); //file.originalname means the actual name of file which is seen in the users pc, this whole syntax returns the extension of that file
            cb(null, file.fieldname, fn) //here null is eror
        })
    }
})

const upload = multer({storage: storage})

app.get("/test", (req, res) => {
   res.render("test");
})

app.post("/upload", upload.single("image"), (req, res) => {
     console.log(req.file)
})
//this we are closing for sometime bea now industry standard we are following
*/

app.get("/", (req, res) => {
   res.render("index");
})

app.get("/login", (req, res) => {
   res.render("login");
})

app.get("/profile/upload", (req, res) => {
   res.render("profileupload");
})

app.post("/upload", isLoggedIn, upload.single("image"), async (req, res) => {
   let user = await userModel.findOne({email: req.user.email})
   user.profilepic = req.file.filename
   await user.save();
   res.redirect("/profile")
})

app.post("/post", isLoggedIn, async (req, res) => {
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
    
    if (!user) {
        return res.status(404).send("User not found");
    }

    if (!user.posts) user.posts = [];
   res.render("profile", {user});
})

app.get("/like/:id", isLoggedIn, async (req, res) => {
    try {
        let post = await postModel.findById(req.params.id).populate("user");
        if (!post) return res.status(404).send("Post not found");

        // Convert to ObjectId for safety
        const userId = new mongoose.Types.ObjectId(req.user.userid);

        if (!post.likes.includes(userId)) {
            post.likes.push(userId);
        } else {
            post.likes.pull(userId);
        }

        await post.save();
        res.redirect("/profile");
    } catch (err) {
        console.error("Like error:", err.message);
        res.status(500).send("Internal Server Error");
    }
});


app.get("/edit/:id", isLoggedIn, async (req, res) => {
    let post = await postModel.findOne({_id: req.params.id}).populate("user");
     if (!post) return res.status(404).send("Post not found");
    res.render("edit", {post})
})

app.post("/update/:id", isLoggedIn, async (req, res) => {
    try {
        await postModel.findOneAndUpdate(
            { _id: req.params.id },            //  filter as object
            { content: req.body.content }      //  update object
        );
        res.redirect("/profile");
    } catch (err) {
        console.error("Update error:", err.message);
        res.status(500).send("Failed to update post");
    }
});


app.post("/register", async (req, res) => {
    try {
        const { email, password, name, username, age } = req.body;

        let existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send("User already registered!");
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        let newUser = await userModel.create({
            username,
            email,
            age,
            name,
            password: hashedPassword
        });

        let token = jwt.sign({ email: newUser.email, userid: newUser._id.toString() }, "shhh");
        res.cookie("token", token);
        res.send("Registered");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});


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
        let token = jwt.sign({email: user.email, userid: user._id.toString()}, "shhh");
        res.cookie("token", token);
        res.status(200).redirect("/profile");
    } else{
        res.status(401).send("Password or Username is wrong");
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