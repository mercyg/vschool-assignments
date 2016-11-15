var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose")
var cors = require("cors");
var uuid = require('uuid')
var app = express();

app.use(bodyParser.json())
app.use(cors());

app.use(express.static("public"))

app.use("/votes",require("./routes/voteRoutes"));
//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://10.7.0.3:27107/data/db');


mongoose.connect("mongodb://localhost/issues", function(){
    console.log("Sucessfully connected to the database")
});

app.listen(8000, function(){
    console.log("working");
})



//app.get("/politicalIssue", function(req, res){
//    res.send(politicalIssue);
//})
//
//app.post("/politicalIssue", function(req,res){
//    var political = req.body;
//    political.id = uuid.v4();
//    politicalIssue.push(political);
//    res.send(political)
//})
//
//app.delete("/politicalIssue/:issueId", function(req,res){
//    politicalIssue.forEach(function(political, index){
//        if(political.id === req.params.issueId){
//            politicalIssue.splice(index, 1);
//            
//        }
//    })
//    res.send(politicalIssue);
//})


