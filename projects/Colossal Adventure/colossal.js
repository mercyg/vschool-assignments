var readline = require('readline-sync')

var colossal = function () {
    var name = readline.question("Welcome to Colossal Adventur,  the first of the \n Jewels of Darkness, \n copyright(C) 1986 Level 9 Computing. \n \n Welcome to the Colossal Castel.\n Tell me your name Now?? ");
    
    console.log("Welcome to the castle  " + name)

    var walk = readline.question("Enter 'w' to start walking: ")
    if (walk === "w") {
        var storrerandom = []
        var maxnum = 1;
        var minnum = 5;
        var inventory = [];


        for (var i = 0; i < 10; i++) {
            var random = (Math.random()).toFixed(2);
            var newrandom = storrerandom.push(random);
        }

        for (var i = 0; i < storrerandom.length; i++) {
            if (storrerandom[i] < 0.33) {
                var panicquestion = readline.question("the wild enemy is appering would you like to attack'a' or run 'r'") 
                    if (panicquestion === 'a') {
                        var attackpower = Math.random() * (maxnum - minnum) + minnum;
                        var attackback = Math.floor(Math.random() * 5) + 1;
                        if (attackpower > attackback) {
                            inventory.push("bags");
                            console.log(inventory);
                           
                        } else {
                            console.log("oh no you are dead");
                        }
                    } else if (panicquestion === 'r') {
                        var escaping = Math.floor(Math.random() * 2) + 1;
                        var attackback = Math.floor(Math.random() * 2) + 1;
                        if (escaping > attackback) {
                            console.log("you have escaped")
                        } else {
                            console.log("sorry you lose")
                        }
                    }

                }
            }
        }
    }
colossal();


//console.log("your enemy is appearing in a " + newfraction );