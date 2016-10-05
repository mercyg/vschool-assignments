var readline = require("readline-sync");
var name = readline.question("Enter a string: ")
var stringInput = function(name){
    var newstr = name.split("");
    for(var i = 0; i < newstr.length;i++ ){
        console.log(newstr[i]);
    }
}

stringInput(name);

var names = readline.question("Enter a string: ")
var chars = readline.question("Enter a character: ")

var stringname = function(names, chars){
    var newnames = names.split("")
    for(var i = 0; i < newnames.length; i++){
        if(newnames[i] === chars){
             console.log(newnames.indexOf(newnames[i]));
           }
        }
    return console.log("character not found")
    }


stringname(names, chars);

var num ;
var fortyNumb = function(num){
 while(num !== 42){
     num = readline.question("what is the meaning of number? ")
 }

fortyNumb(num);
    

var newNum = function(number){
    var lowest = 0;
    var num;
    for(var i = 0; i < 10; i++){
        number = readline.question("enter the number:")
        if(lowest > number){
            return num
        }
    }
}