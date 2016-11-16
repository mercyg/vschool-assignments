var express = require("express");
var app = express();
//8000 is a port number
//req is requirement
//res is response

app.get("/",function(req, res){
    res.send({message: "you did it!", suces: true});
});

app.listen(8000,function(){
    console.log("Server is running on port 8000")
})