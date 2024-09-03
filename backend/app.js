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
// importer le module bcrypt
const bcrypt = require('bcrypt');
// importer le module express-session
const session = require('express-session');
// importer le module jsonwebtoken
const jwt = require('jsonwebtoken');
// importer le module multer
const multer = require('multer');
// importer le module path
const path = require('path');

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
// Session configuration
const secretKey = 'croco24YT';
app.use(session({
    secret: secretKey,
}));
//shortcut de path to save into database
app.use('/shortcut', express.static(path.join('backend/images')))
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
//storage config multer
const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        if (isValid) {
            cb(null, 'backend/images')
        }
    },
    //filename
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});


//Models importation
const Match = require("./models/match");
const Player = require("./models/player");
const Team = require("./models/team");
const User = require("./models/user");

const { isModifier } = require('typescript');


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
    let match = new Match(req.body);//create a new match instance(type: Match)
    //Insert /save match into matches(collection name)
    match.save();
    //send a response to the service
    res.json({ msg: "Added with success" });
});
// business logic : Edit Match
app.put("/matches", (req, res) => {
    console.log("here into BL:Edit Match", req.body);
    let newMatch = req.body;
    Match.updateOne({ _id: newMatch._id }, newMatch).then(
        (result) => {
            console.log("Here result after update", result);
            if (result.nModified == 1) {
                res.json({ msg: true })

            } else {
                res.json({ msg: false })
            }
        }
    )
});
// business logic : Get All Matches
app.get("/matches", (req, res) => {
    console.log("here into BL:Get All Matches");
    Match.find().then(
        (docs) => {
            console.log("here all matches from collection", docs);
            res.json({ T: docs })
        })
});
// business logic : Delete Match By Id
//(/matches/:id) c'est un path paramétree
app.delete("/matches/:id", (req, res) => {
    console.log("here into BL: Delete Match By Id", req.params.id);
    let matchId = req.params.id;
    Match.deleteOne({ _id: matchId }).then(
        (result) => {
            console.log("Here result after delete", result);
            if (result.deletedCount == 1) {
                res.json({ msg: true })

            } else {
                res.json({ msg: false })
            }
        }
    )
});
// business logic : Get Match By Id
app.get("/matches/:id", (req, res) => {
    console.log("here into BL: Get  Match By Id", req.params.id);
    let matchId = req.params.id;
    Match.findById(matchId).then((doc) => {
        console.log(doc);
        res.json({ data: doc })
    })
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
    Player.find().populate("teamId").then(
        (docs) => {
            console.log("Here all Plyers from collection", docs);
            res.json({ T: docs })
        }
    )
});
// business logic : Delete Player
app.delete("/players/:id", (req, res) => {
    console.log("here into BL: Delete Player By Id", req.params.id);
    let playerId = req.params.id;
    Player.deleteOne({ _id: playerId }).then(
        (result) => {
            console.log("Here result after delete", result);
            if (result.deletedCount == 1) {
                res.json({ isDeleted: true })

            } else {
                res.json({ isDeleted: false })
            }
        }
    )
});
// business logic : Add Player
app.post("/players", (req, res) => {
    console.log("here into BL: Add Player", req.body);
    Team.findById(req.body.teamId).then(
        (team) => {
            console.log("Here team", team);
            if (!team) {
                res.json({ msg: "Team not found" });
            }
            //on cas ou les attributs sont les mm en html et le model Player
            else {
                req.body.teamId = team._id
                let player = new Player(req.body);
                player.save(
                    (err, savedPlayer) => {
                        if (err) {
                            res.json("Player not saved")
                        }
                        else {
                            //add saved player id into players attribute(Team)
                            team.players.push(savedPlayer._id);
                            //update players attribute into teams collection
                            team.save();
                            //send json response to FE
                            res.json({ msg: "Added with success" });
                        }
                    }
                );
            }
            //on cas ou les attributs ne sont pas les mm dans html et player
            // else {
            //     let player = new Player({
            //         name: req.body.name,
            //         age: req.body.age,
            //         position: req.body.position,
            //         number: req.body.number,
            //         tId: team._id //type objectId, value from teams collection
            //     });
            //     player.save();
            //     res.json({ msg: "Added with success" });
            // }
        }
    )
});
// business logic : Get Player By Id
app.get("/players/:id", (req, res) => {
    console.log("here into BL: Get Player By Id", req.params.id);
    let playerId = req.params.id;
    Player.findById(playerId).then((doc) => {
        console.log(doc);
        res.json({ data: doc })
    })
});
// business logic : Edit Player
app.put("/players", (req, res) => {
    console.log("here into BL:Edit Player", req.body);
    let newPlayer = req.body;
    Player.updateOne({ _id: newPlayer._id }, newPlayer).then(
        (result) => {
            console.log("Here result after update", result);
            if (result.nModified == 1) {
                res.json({ msg: true })

            } else {
                res.json({ msg: false })
            }
        }
    )
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
    Team.find().populate("players").then(
        (docs) => {
            console.log("Here all teams from collections", docs);
            res.json({ T: docs });
        }
    )
});
// business logic : Delete team
app.delete("/teams/:id", (req, res) => {
    console.log("here into BL: Delete Teams By Id", req.params.id);
    let teamId = req.params.id
    Team.deleteOne({ _id: teamId }).then(
        (result) => {
            console.log("Here result after delete", result);
            if (result.deletedCount == 1) {
                res.json({ isDeleted: true })

            } else {
                res.json({ isDeleted: false })
            }
        }
    )

});
// business logic : Add team
app.post("/teams", (req, res) => {
    console.log("here into BL: Add Team", req.body);
    let team = new Team(req.body);
    team.save();
    res.json({ msg: "Added with success" });

});
// business logic : Get Match By Id
app.get("/teams/:id", (req, res) => {
    console.log("here into BL: Get Team By Id", req.params.id);
    let teamId = req.params.id;
    Team.findById(teamId).then((doc) => {
        console.log(doc);
        res.json({ data: doc })
    })
});
// business logic : Edit Team
app.put("/teams", (req, res) => {
    console.log("here into BL:Edit Team", req.body);
    let newTeam = req.body;
    Team.updateOne({ _id: newTeam._id }, newTeam).then(
        (result) => {
            console.log("Here result after update", result);
            if (result.nModified == 1) {
                res.json({ msg: true })

            } else {
                res.json({ msg: false })
            }
        }
    )
});
/////// Users
// business logic : Add User(Signup)
app.post("/users/signup", multer({ storage: storageConfig }).single('img'), (req, res) => {
    console.log("here into BL: Add User", req.body);
    User.findOne({ email: req.body.email }).then((doc) => {
        if (doc) {
            res.json({ msg: "User Exist" })
        } else {
            bcrypt.hash(req.body.password, 10).then(
                (cryptedPwd) => {
                    req.body.password = cryptedPwd;
                    // if (req.file) {
                    //     req.body.path = `http://localhost:3000/shortcut/${req.file.filename}`;
                    // }
                    // else {
                    //     req.body.path = `http://localhost:3000/shortcut/img.png`;
                    // }
                    //Ternary Operator
                    (req.file) ?
                        req.body.path = `http://localhost:3000/shortcut/${req.file.filename}` :
                        req.body.path = `http://localhost:3000/shortcut/img.png`;
                    console.log("here crypted pwd", cryptedPwd);
                    let user = new User(req.body);
                    user.save();
                    res.json({ msg: "User Added with success" })
                }
            )
        }
    })
});

// business logic : Login
app.post("/users/login", (req, res) => {
    console.log("here into BL: Login", req.body);
    //search user by email
    User.findOne({ email: req.body.email }).then(
        (doc) => {
            console.log('here doc by email', doc);
            if (!doc) {

                res.json({ msg: "Email does not exist" });
            }
            else {
                //compare passwords
                bcrypt.compare(req.body.password, doc.password).then(
                    (result) => {
                        console.log("here result from bcrypt", result);
                        if (result) {
                            let userToSend = {
                                id: doc._id,
                                FN: doc.firstName,
                                LN: doc.lastName,
                                role: doc.role,
                                path: doc.path
                            }
                            const token = jwt.sign(userToSend, secretKey, { expiresIn: '1h' });
                            console.log("here token", token);
                            res.json({ msg: "Welcome", user: token });
                        } else {
                            res.json({ msg: "Check your password" });
                        }
                    }
                )
            }
        }
    )
})
// 5) cette  application est exporté : sera importé dans d'autres fichiers : importable
module.exports = app;
