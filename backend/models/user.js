//import mongoose module 
const mongoose = require('mongoose');
//create match Schema
const userSchema = mongoose.Schema({
    //attribut:type
    firstName: String,
    lastName: String,
    telephone: String,
    email: String,
    password: String,
    role: String,
    path: String
}
);
//affect model name to Schema
const user = mongoose.model("User", userSchema);
// make match importable
module.exports = user;