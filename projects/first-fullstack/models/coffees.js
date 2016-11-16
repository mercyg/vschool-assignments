var mongoose = require("mongoose");
var Pictoose = require("pictoose")

var coffeeReview = new mongoose.Schema({
    model: String,
    coffeName: String,
    productBy: String,
    roastType: String,
    grideType: String,
    allRating: [Number],
    rating: Number
})

coffeeReview.pre("save", function (next) {
    var sum = 0;
    for (var i = 0; i < this.allRating.length; i++) {
        sum += this.allRating[i];
    }
    this.rating = sum / this.allRating.length;
    next();
});

module.exports = mongoose.model("Coffee", coffeeReview);

coffeeReview.plugin(Pictoose.Plugin, ['thumbnail','brand']);