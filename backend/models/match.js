//import mongoose module 
const mongoose = require('mongoose');
//create match Schema
const matchSchema = mongoose.Schema({
    //attribut:type
    scoreOne: Number,
    scoreTwo: Number,
    teamOne: String,
    teamTwo: String
}
);
//affect model name to Schema
const match = mongoose.model("Match", matchSchema);
// make match importable
module.exports = match;