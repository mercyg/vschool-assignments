var readline = require('readline-sync');
var name = readline.question("What is your Name?");


console.log("My name is:  " + name.toUpperCase() + " The number of Character of your name is  :  " + name.length);

var faviourtColor = readline.question("What is your faviour color?")
var placeBorn = readline.question("Where were you born?")

console.log("Your faviourt color is " + faviourtColor + " and You werre born " + placeBorn);


var story = readline.question("Tell me a story now?")
var newstory = story.substring(story.length/2, story.length);
console.log(newstory);

var question = readline.question("Would you like to start from somewhere else from your infor?  Choose a number in the range: [0 - "  + story.length + "]")

var newquestion = story.substring(question,story.length);
console.log(newquestion);



