var express = require("express");
//var uuid = require("uuid");
var bodyParser = require("body-parser");
//var cors = require("cors");

var mongoose = require("mongoose")
var path = require("path");
var port = process.env.PORT || 8000;
var app = express();


app.use(bodyParser.json());
//app.use(cors());
app.use("/bounties", require("./routes/bountyRoutes"));
app.use(express.static(path.join("public")));

mongoose.connect("mongodb://localhost/bounties", function(){
    console.log("Successfully connected to the database")
})

app.listen(port, function(){
    console.log("Listening on port" + port);
})

//var bounties = [
//    {
//        firstName: "Throghering",
//        lastName: "Woldfall",
//        living: true,
//        bounyAmount: 45,
//        type: "Sith",
//        id: uuid.v4()
//    },
//    {
//        firstName: "Derak",
//        lastName: "Darkgranite",
//        living: false,
//        bounyAmount: 75,
//        type: "Jedi",
//        id: uuid.v4()
//    },
//    {
//        firstName: "Garnit",
//        lastName: "Underbasher",
//        living: true,
//        bounyAmount: 66,
//        type: "Sith",
//        id: uuid.v4()
//    }
//];
//
//app.get('/bounties', function (req, res) {
//    res.send(bounties)
//})
//
//app.post('/bounties', function (req, res) {
//    var bounty = req.body;
//    bounty.id = uuid.v4();
//    bounties.push(bounty);
//    res.send(bounty);
//})
//
//app.put('/bounties/:bountyId', function (req, res) {
//    bounties.forEach(function (bounty, index) {
//        console.log(bounty, index);
//        if (req.params.bountyId === bounty.id) {
//            //console.log(bounty)
//            bounties[index] = req.body;
//            //console.log(bounties)
//            res.send(bounties);
//        }
//    })
//
//})
//
//app.delete('/bounties/:bountyId', function (req, res) {
//    bounties.forEach(function (bounty, index) {
//        if (req.params.bountyId === bounty.id) {
//            bounties.splice(index, 1);
//        }
//    })
//    res.send(bounties);
//})
//
//
//
