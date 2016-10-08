var readline = require('readline-sync');
var randomEnemyGenerator = function () {
    var enemy = ["snake", "bigsnake", "largesmall"];
    var randomenemy = getRandomInt(0, 2);
    return enemy[randomenemy];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var walkingArray = [];
var inventory = [];

function User(name, hp, inventory) {
    this.name = name;
    this.healthPower = hp || 10;
    this.inventory = inventory
}
var newUser = new User();


var name = readline.question("Welcome to the Collosian Adveneture Can I pleas have your name: ");
newUser.name = name;

console.log("Hello " + newUser.name);
//this function return the random walking number
var walk = function () {
    var hit = 0
    var damage = 0
    var walking = readline.question("Enter 'w' to start walking: ")
        //if user start walking random number will be stored in the wakingarray
    if (walking === 'w') {
        for (var i = 0; i < 20; i++) {
            var random = (Math.random()).toFixed(2);
            if (random < 0.33) {
                var userDecision = readline.question("If you would like to attack enter 'a ' or run 'r ' ")
                if (userDecision === 'a') {

                    var attackPower = getRandomInt(1, 50);
                    //console.log(attackPower);
                    if (attackPower > 18) {
                        hit += 5;
                    } else if (attackPower > 10) {
                        hit += 2;
                    }
                    console.log("You are hitting power " + hit);
                    var damageAmount = getRandomInt(1, 50);
                 //   console.log(randomEnemyGenerator() + " " + damageAmount);
                    if (damageAmount > 18) {
                        damage += 5
                    } else if (damageAmount > 10) {
                        damage += 2
                    }
                    console.log("You are being damaged power " + damage);
                   
                } else if(userDecision === 'r') {
                    var chanceofEscaping = getRandomInt(1, 2);
                    var damageEnemyAttack = getRandomInt(1, 2)
                    if (chanceofEscaping === 1) {
                        console.log("You are caugh BYE BYE");
                        var anotherchance = printing();
                        break;
                    } else if (chanceofEscaping === 2) {
                        continue;
                    }
                }

            }
        }
         if (hit > damage) {
            newUser.healthPower += 10;
            newUser.inventory = ['bags', 'bombs','knives', 'gold'];
            console.log("You have won!!!");
             var questionwin = printing();
             
            } else if (hit < damage) {
                newUser.healthPower -= 10;
                newUser.inventory = ["none"];
                console.log("Oh No you lose");
                var questionlose = printing()
                
            }
        }else{
            console.log("I'm sorry I  don't know what you entered, start the game again");
        }
    
    }

 var printing = function(){
     var question = readline.question("Would you like to see your score or would you like to to play the game again  ")
     if(question === "print"){
         console.log("Your Name is " +  newUser.name + " The health Power " + newUser.healthPower + " Your inventory is:  " + newUser.inventory);
     }else if(question === "yes"){
         walk();
     }
 }

walk();
//randomEnemyGenerator();




