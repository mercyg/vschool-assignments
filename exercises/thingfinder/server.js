var express = require("express")
var bodyParser = require("body-parser")

var app = express();
app.use(bodyParser.json());

app.listen(8000, function () {
    console.log("working")
})

var fruits = [
    {
        type: "banana",
        brand: "chiquita",
        price: 0.5
    },
    {
        type: "banana",
        brand: "gala",
        price: 0.5
    },
    {
        type: "orange",
        brand: "naval",
        price: 0.75
    },
      {
        type: "mango",
        brand: "dole",
        price: 0.6
    },
]

app.get('/fruits', function (req, res) {
    res.send(fruits);
})

app.get('/fruits/type', function (req, res) {

    var matchingFruits = [];

    fruits.forEach(function (fruit) {
        if (fruit.type === req.query.type) {
            matchingFruits.push(fruit)
        }

    })

    res.send(matchingFruits);

})