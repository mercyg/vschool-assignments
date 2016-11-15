var mongoose = require("mongoose");

var voteSchema = new mongoose.Schema({
    title: String,
    description: String,
    upVoted: Number,
    downVoted: Number,
    comments: [{
        post: String,
        postedBy: String
    }]

});

module.exports = mongoose.model("Vote", voteSchema);