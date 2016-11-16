var express = require("express");

var coffeeRouter = express.Router();

var Coffee = require("../models/coffees");

//coffeeRouter.get("/", function(req, res) {
//    Coffee.find(function(err, coffeeReview) {
//        console.log(coffeeReview);
//    });
//});

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
//    console.log(req.body);
    var review = new Coffee(req.body);
    //console.log(review);
    review.save(function (err, newReview) {
        if (err) {
            res.status(500).send(err);
        } else {
            console.log(newReview)
            res.send(newReview);
        }
    })

})

coffeeRouter.post("/images", function(req, res){
   var newCoffee = new Coffee(req.body);
    newCoffee.model.thumbnail = req.files.thumbnail.path;
    newCoffee.model.brand = req.files.brand.path;
    newCoffee.save();
    res.send("ok")
})

module.exports = coffeeRouter;