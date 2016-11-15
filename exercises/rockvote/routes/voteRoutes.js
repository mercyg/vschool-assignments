var express = require("express");

var voteRouter = express.Router();

var Vote = require("../models/vote");

voteRouter.get("/", function (req, res) {
    Vote.find(function (err, votes) {
        if (err) {
            res.status(500).send(err)
        } else {
            res.send(votes)
        }
    })
})


voteRouter.post("/", function (req, res) {
    // console.log(req.body.comments)
    var votes = new Vote(req.body);

    votes.save(function (err, newVotes) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(newVotes)
        }
    });
});

voteRouter.delete("/:votesId", function (req, res) {
    Vote.findByIdAndRemove(req.params.votesId, function (err, deletVote) {
        if (err) {
            res.status(500).send(err);
        } else {
            Vote.find(function (err, votes) {
                res.send(votes)
            })

        }
    })
});

voteRouter.post("/:votesId/comments", function (req, res) {

    //console.log(req.body.comments);
    Vote.findById(req.params.votesId, function (err, vote) {
        if (err) return res.status(500).send(err);
        vote.comments.push(req.body);
        vote.save(function (err) {
            if (err) return res.status(500).send(err);
            res.send(vote);
        });
    });





    //var newComment = req.body.comments;


    //    var comment = new Vote(req.body.comment);
    //    //comment.push()
    //    comment.save(function(err, newComments){
    //        if(err){
    //            res.status(500).send(err);
    //        }else{
    //            res.send(newComments)
    //        }
    //    })
});






module.exports = voteRouter;