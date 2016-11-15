var express = require("express");
var bountyRouter = express.Router();

var Bounty = require("../model/bounty");

bountyRouter.get("/", function (req, res){
    Bounty.find(function(err, bounties){
        if(err){
            res.status(500).send(err);
        }else{
            res.send(bounties)
        }
    })
})

bountyRouter.post("/", function(req, res){
    var bounty = new Bounty(req.body);
    
    bounty.save(function(err, newBounty){
        if(err){
            res.status(500).send(err);
        }else{
            res.send(newBounty);
        }
    })
    
})

bountyRouter.put("/:bountyId", function(req, res){
    Bounty.findByIdAndUpdate(req.params.bountyId, req.body, {new: true}, function(err, newBounty){
        if(err){
            res.status(500).send(err);
        }else{
            res.send(newBounty);
        }
    })
    
    
})

bountyRouter.delete("/:bountyId", function(req, res){
    Bounty.findByIdAndRemove(req.params.bountyId, function(err, deleteBounty){
        if(err){
            res.status(500).send(err);
        }else{
            res.send(deleteBounty)
        }
    })
})



module.exports = bountyRouter;