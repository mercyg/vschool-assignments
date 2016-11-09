var enmey = []

function Enemy(type, hitPoint, defense){
    this.type = enemyType();
    this.hitPoint = determineHitPoints(this.type)
    this.defense = this.hitPoint * 3;
}


var enemyType = function(){
    var typies = ["Ancient Dragon", "Prowler", "MightyGrunt"];
    var randomenemy = getRandomInt(0,2);
    return typies[randomenemy];
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function determineHitPoints(enemyType){
    if(enemyType === "Ancient Dragon"){
        return getRandomInt(80,100);
    }else if(enemyType === "Prowler"){
        return getRandomInt(50,79);
    }else{
        return getRandomInt(20,49);
    }
}

function enemyDefense(determineHitPoints){
    return determineHitPoints * 3;
}



for(var i = 0 ; i < 6; i++){
    enmey.push(new Enemy());
}

console.log(enmey);