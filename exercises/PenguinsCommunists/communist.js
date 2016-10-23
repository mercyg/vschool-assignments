var damgageAmount = 50000;
var population = 1000000;
var penguinsName = "Penguins";
var communistName = "Communists";
function Communists(partyname, spopulation) {
    this.name = partyname;
    this.population = spopulation;
    this.sendNuke = function (partyAttacked, callback2, callback3) {
        var determinAttack = getRandomInt(0, 1);
        if (determinAttack === 1) {
            callback2(partyAttacked);
            console.log(partyAttacked.population -= damgageAmount);
        } else {
            callback3(partyAttacked);
        }
    }
}

function Penguins(partyname, spopulation) {
    this.name = partyname;
    this.population = spopulation;
    this.sendNuke = function (partyAttacked, callback2, callback3) {
        var determinAttack = getRandomInt(0, 1);
        if (determinAttack === 0) {
            callback2(partyAttacked);
            console.log(partyAttacked.population -= damgageAmount);
        } else {
            callback3(partyAttacked);
        }
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function onHit(party) {
    if (party.name === penguinsName) { 
        return console.log("The Penguins' nuke hit the Communists  ")
    } else {
        return console.log("The Communists nuke hit the Penguins")
    }

}

function onMiss(party) {
    
    if (party.name === penguinsName) {
        return console.log("The Penguins' nuke missed the Communists and instead landed in the ocean")
    } else {
        return console.log("The communist' nuke missed the penguins and instead landed in the ocean")
    }

}

//driver function or game engin function
function penguinsVsCommunistsGame() {
    var penguins = new Communists(penguinsName, population);
    var communists = new Penguins(communistName, population);
    var turnToAttack = getRandomInt(0, 1);
    var parties = [penguins, communists];
    var attackedParty;
    var currenParty;
    var nextParty;
    while (penguins.population > 0 && communists.population > 0) {
        currenParty = parties[turnToAttack];
        if (turnToAttack === 0) {
            attackedParty = 1;
            turnToAttack = 1;
        } else {
            attackedParty = 0;
            turnToAttack = 0;
        }
        
        nextParty = parties[attackedParty];
        currenParty.sendNuke(nextParty, onHit, onMiss);
       
    }

}
penguinsVsCommunistsGame();







