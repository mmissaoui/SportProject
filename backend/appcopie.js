// 1)import
// 2)traitement
// 3)export
// 1) importer le module installé dans une constante('nom de module' :express)
const express = require('express');
// importer le module installé body-parser
const bodyParser = require('body-parser');
// importer le module installé mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');


// 2)creates express application : app
const app = express();
// 3)app configuration : en utilisant use
// format de donnees json
app.use(bodyParser.json());
// recupere les objets from input: post et put
app.use(bodyParser.urlencoded({ extended: true }));
// Security configuration
app.use((req, res, next) => {
    // au lieu de permettre * au pls FE denvoyer des requetes , on peut utiliser le port du FE qu'on veut recevoir les requetes from.
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, Accept, Content-Type, X-Requested-with, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, DELETE, OPTIONS, PATCH, PUT'
    );
    // il faut respecter tout pour passer a l'etape suivante: traitement
    next();
});
//Models importation
const Match = require("./models/match");

let matchesTab = [
    { id: 1, scoreOne: 2, scoreTwo: 3, teamOne: "CA", teamTwo: "EST" },
    { id: 2, scoreOne: 2, scoreTwo: 3, teamOne: "CA", teamTwo: "CAB" },
    { id: 3, scoreOne: 2, scoreTwo: 3, teamOne: "CA", teamTwo: "CSS" },
    { id: 4, scoreOne: 2, scoreTwo: 3, teamOne: "CA", teamTwo: "CSS" },
];

let players = [
    { id: 1, name: "Ahmed", position: "MK", number: 12, age: 25 },
    { id: 2, name: "Ahmed", position: "MK", number: 12, age: 25 },
    { id: 3, name: "Ahmed", position: "MK", number: 12, age: 25 }
];
let teams = [
    { id: 1, name: "CA", owner: "CA", foundation: 1960 },
    { id: 1, name: "EST", owner: "EST", foundation: 1850 },
    { id: 1, name: "CAB", owner: "CAB", foundation: 1970 }
];
//4) Traitement logique des requetes: business logic
////Match////
// business logic : Add Match
app.post("/matches", (req, res) => {
    console.log("here into BL: Add Match", req.body);
    let match = req.body;
    matchesTab.push(match);
    res.json({ msg: "Added with success" });

});
// business logic : Edit Match
app.put("/matches", (req, res) => {
    console.log("here into BL:Edit Match", req.body);
    let newMatch = req.body;
    let pos = matchesTab.findIndex((elt) => elt.id == newMatch.id);
    matchesTab[pos] = newMatch;
    res.json({ msg: "Edited with success" });
});
// business logic : Get All Matches
app.get("/matches", (req, res) => {
    console.log("here into BL:Get All Matches");
    res.json({ T: matchesTab })
});
// business logic : Delete Match By Id
//(/matches/:id) c'est un path paramétree
app.delete("/matches/:id", (req, res) => {
    console.log("here into BL: Delete Match By Id", req.params.id);
    let matchId = req.params.id;
    let pos = matchesTab.findIndex((elt) => elt.id == matchId);
    console.log(pos);
    matchesTab.splice(pos, 1);
    res.json({ msg: 'Match is deleted with success' });

});
// business logic : Get Match By Id
app.get("/matches/:id", (req, res) => {
    console.log("here into BL: Get  Match By Id", req.params.id);
    let matchId = req.params.id;
    let data = matchesTab.find((elt) => elt.id == matchId);
    console.log({ data: data });
    res.json({ data: data });
});
// business logic : Search Match 
app.post("/matches/search", (req, res) => {
    console.log("here into BL: Search  Match By Id", req.body);
    let obj = req.body;
    let data = matchesTab.filter((elt) =>
        elt.scoreOne == obj.scoreOne &&
        elt.scoreTwo == obj.scoreTwo);

    res.json({ tab: data });

});



////Player////
// business logic : Get All Players
app.get("/players", (req, res) => {
    console.log("here into BL:Get All Players");
    res.json({ T: players })
});
// business logic : Delete Player
app.delete("/players/:id", (req, res) => {
    console.log("here into BL: Delete Player By Id", req.params.id);
    let playerId = req.params.id;
    let pos = matchesTab.findIndex((elt) => elt.id == playerId);
    console.log(pos);
    players.splice(pos, 1);
    res.json({ msg: 'Player is deleted with success' });

});
// business logic : Add Player
app.post("/players", (req, res) => {
    console.log("here into BL: Add Player", req.body);
    let player = req.body;
    players.push(player);
    res.json({ msg: "Added with success" });

});
// business logic : Get Player By Id
app.get("/players/:id", (req, res) => {
    console.log("here into BL: Get Player By Id", req.params.id);
    let playerId = req.params.id;
    let data = players.find((elt) => elt.id == playerId);
    console.log({ data: data });
    res.json({ data: data });
});
// business logic : Edit Player
app.put("/players", (req, res) => {
    console.log("here into BL:Edit Player", req.body);
    let newPlayer = req.body;
    let pos = players.findIndex((elt) => elt.id == newPlayer.id);
    players[pos] = newPlayer;
    res.json({ msg: "Edited with success" });
});
// business logic : Search Player 
app.post("/players/search", (req, res) => {
    console.log("here into BL: Search  Player", req.body);
    let obj = req.body;
    let data = players.filter((elt) =>
        elt.age == obj.age);
    res.json({ tab: data });
});

////Team////
// business logic : Get All Teams
app.get("/teams", (req, res) => {
    console.log("here into BL:Get All Teams");
    res.json({ T: teams })
});
// business logic : Delete team
app.delete("/teams/:id", (req, res) => {
    console.log("here into BL: Delete Teams By Id", req.params.id);
    let teamId = req.params.id
    let pos = teams.findIndex((elt) => elt.id == teamId);
    console.log(pos);
    teams.splice(pos, 1);
    res.json({ msg: 'Team is deleted with success' });

});
// business logic : Add team
app.post("/teams", (req, res) => {
    console.log("here into BL: Add Team", req.body);
    let team = req.body;
    teams.push(team);
    res.json({ msg: "Added with success" });

});
// business logic : Get Match By Id
app.get("/teams/:id", (req, res) => {
    console.log("here into BL: Get Team By Id", req.params.id);
    let teamId = req.params.id;
    let data = teams.find((elt) => elt.id == teamId);
    console.log({ data: data });
    res.json({ data: data });
});
// business logic : Edit Team
app.put("/teams", (req, res) => {
    console.log("here into BL:Edit Team", req.body);
    let newTeam = req.body;
    let pos = teams.findIndex((elt) => elt.id == newTeam.id);
    teams[pos] = newTeam;
    res.json({ msg: "Edited with success" });
});
// 5) cette  application est exporté : sera importé dans d'autres fichiers : importable
module.exports = app;
