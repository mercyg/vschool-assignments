//creat an enemy constructor shoul hav type, hitpoonts , defense
//type : Ancient Dragon, Prowler or mighty grunt

var enemeies = [];
function getRandomInt(min,max){
    return Math.floor(Math.random)
}

function chooseEnemyType(){
    var enemyTypes = ["Mighty Grunt", "Prowler", "Ancient dragon"];
    var random = Math.floor(Math.random() * 3);
    return enemyTypes[random];
}


function determineHitPoints(enemyType){
    if(enemyType === "Mighty Grunt"){
        return getRandomInt(20,49);
        
    }else if(enemyType === "Prowler"){
        return getRandomInt(50, 79)
    }else if(enemyType === "Ancient Dragon"){
        return getRandomInt(80,100);
    }
}

function Enemy(){
    this.type = chooseEnemyType();
    this .determineHitPoints(this.type);
    this. defense = this.hp * 3;
}

for(var i = 0 ; i < 100; i++){
    var 
}