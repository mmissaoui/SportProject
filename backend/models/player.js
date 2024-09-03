//import mongoose module 
const mongoose = require('mongoose');
//create player Schema
const playerSchema = mongoose.Schema({
    //attribut:type
    name: String,
    number: Number,
    age: Number,
    position: String,
    teamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team"
    }
}
);
//affect model name to Schema
const player = mongoose.model("Player", playerSchema);
// make player importable
module.exports = player;