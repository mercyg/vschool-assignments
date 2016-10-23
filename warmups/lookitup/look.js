var readline = require('readline-sync');
var dictionary = {
    talk : "talking over hand",
    shake: "shaking blah blha",
    know: "understanding"
    
}

function look(obj){
    var word= readline.question("enter the word? ");
    for(var prop in obj){
        if(prop !== word){
            var define = readline.question("please define your your word?")
            obj[word] = define;
            var userWord = readline.question("Would you like to see your word")
            if(userWord === "yes"){
                console.log(dictionary)
            }
        }
    }
        
}
  //  this.word = defination;

look(dictionary);