var express = require("express")
var bodyParser = require("body-parser")
var uuid = require("uuid")
//var cors = require("cors")
var app = express();
//app.use(cors());
app.use(bodyParser.json());
//app.use(express.static("public"));
app.listen(8000,function(){
    console.log("It is working")
})

var todolist = [
    {
        name: "Wash Dish",
        description: "The thing in the sink",
        imgeUrl: "http://imag.png",
        completed: false,
        id: uuid.v4()
    },
    {
        name: "Buy groceries",
        description: "you don't ahve any",
        imgeUrl: "http://imag.png",
        completed: false,
        id: uuid.v4()
    }
    
]

app.get('/todolist', function(req, res){
    res.send(todolist);
})

app.get('/todolist/:todoId', function(req,res){
    for(var i = 0; i < todolist.length; i++){
        if(todolist[i].id === req.params.todoId){
            res.send(todolist[i])
        }
    }
})

app.post('/todolist', function(req,res){
    todolist.push(req.body)
    res.send(req.body)
})

app.put('/todolist/:todoId', function(req, res){
    todolist.forEach(function(todo, index){
        if(todo.id === req.params.todoId){
            todolist[index] = req.body;
            
            res.send(todolist)
        }
    })
})

app.delete('/todolist/:todoId', function(req, res){
    todolist.forEach(function(todo, index){
        if(todo.id === req.params.todoId){
            todolist.splice(index, 1)
        }
    })
    res.send(todolist)
})