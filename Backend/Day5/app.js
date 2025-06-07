const cookieParser = require('cookie-parser')
const  express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


app.use(cookieParser())

/*
app.get("/", function(req, res){
   //res.cookie("mame", "mru"); //cookie is storing data from server to browser, here we have set cookie
   //res.send("done");
   bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
    });
});  //here salt means a random string
-saltRounds i set to 10 by default and myPlaintextpassword means normal string or ur original password
}) */

/*
app.get("/", function(req, res){
   bcrypt.genSalt(10, function(err, salt){
      bcrypt.hash("mkudake", salt, function(err, hash){
         console.log(hash);
         //store hash(random string) in your password DB
      })
   })
}); //this is know as encryption


//now to decrypt means it is like comparing
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
    });
});


app.get("/", function(req, res){
   bcrypt.compare("mkudake", "$2b$10$0XfXSQQogvU9FeV5kHhPzuzhEa0bmWJ1wi1wjwSPQEmoPoNWNAhg6", function(err, result){
      console.log(result); //if true then hash is right or false
   })
})
*/

//for jwt
//the string after email is a token which should be kept veryy secret so that it cannot be hacked for now we have took it normal;
// the string will be encrypted on basis of the token (secret) email will be encryted, means if that secret is hacked the data string will also be hacked
app.get("/", function(req, res){
   let token = jwt.sign({email: "mruganksha@gmail.com"}, "secret");
   //send the token
   res.cookie("token", token); //here we had send the cookie to browser
   console.log(token);
   res.send("done");
})




//to set cookie we use res. and to read req.
app.get("/read", function(req, res){
   //console.log(req.cookies) 
   //now with token
   //console.log(req.cookies.token); //by this we got cookie at backend
   //res.send("read page");

   let data = jwt.verify(req.cookies.token, "secret"); //here we are decrypting the token
   console.log(data);
})

app.listen(3000);