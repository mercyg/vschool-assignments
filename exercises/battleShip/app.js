//need to make a location constructor
//will have a parameter of ship hit and display 
function Location(ship,hit,display){
    this.ship = ship;
    this.hit = hit;
    this.display = display;
}
//var location = new Location()

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




function MultiDimensionalArray(iRows, iCols) {

   
    var table = [iRows];
    
    for (var i = 0; i < iRows; i++) {
       
           table[i] =[iCols];
        for (var j = 0; j < iCols; j++) {
            table[i][j] = getRandomInt(0,10);
        }
    }
    return (table);
} 
console.log(MultiDimensionalArray(10,10));


