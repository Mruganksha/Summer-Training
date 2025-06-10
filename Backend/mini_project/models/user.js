const mongoose = require('mongoose');

mongoose.set("strictQuery", true);

mongoose.connect("mongodb://127.0.0.1:27017/postsApp");

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    age: Number,
    email: String,
    password: String,
    posts: [
       {type: mongoose.Schema.Types.ObjectId,
        ref: "post"
       },
    ]
})

module.exports = mongoose.model('user', userSchema);