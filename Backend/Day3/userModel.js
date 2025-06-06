const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/mongoPractice`);

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String
})
//schema is users identity

module.exports = mongoose.model("user", userSchema); //it will be converted to plural like user to users