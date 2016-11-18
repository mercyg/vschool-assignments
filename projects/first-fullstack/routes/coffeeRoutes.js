var express = require("express");
//var upload = multer({ dest: 'uploads/' });
var coffeeRouter = express.Router();

var Coffee = require("../models/coffees");


coffeeRouter.get("/", function (req, res) {
    Coffee.find(function (err, coffeeReview) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(coffeeReview)
        }
    })
})

coffeeRouter.post("/", function (req, res) {
    var review = new Coffee(req.body);
    review.save(function (err, newReview) {
        if (err) {
            res.status(500).send(err);
        } else {
            console.log(newReview)
            res.send(newReview);
        }
    })

})

coffeeRouter.delete("/:coffeeId", function(req,res){
    Coffee.findByIdAndRemove(req.params.coffeeId, function(err,deleteReview){
        if(err){
            res.status(500).send(err);
        }else{
                res.send(coffeeReview);
        }
    })
})

coffeeRouter.put("/:coffeeId", function(req, res){
    Coffee.findByIdAndUpdate(req.params.coffeeId, req.body,{new: true}, function(err, newReview){
        if(err){
            res.status(500).send(err);
        }else{
            res.send(newReview);
        }
    })
})

coffeeRouter.post("/:coffeeId/rating", function(req, res){
    Coffee.findById(req.params.coffeeId, function(err, rate){
        if(err) return res.status(500).send(err);
        vote.allRating.push(req.body);
        vote.save(function(err){
            if(err) return res.status(500).send(err);
            res.send(rate)
        })
    })
})


//coffeeRouter.post("/images", function(req, res){
//   var newCoffee = new Coffee(req.body);
//    newCoffee.model.thumbnail = req.files.thumbnail.path;
//    newCoffee.model.brand = req.files.brand.path;
//    newCoffee.save();
//    res.send("ok")
//})

module.exports = coffeeRouter;