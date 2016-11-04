function determinIfShip(){
    var random = Math.floor(Math.random() * 5);
    return random === 4;
}

function Location(){
    this.isship = determinIfShip();
    this.hit = null;
    this.display = "~";
}

function makeBoard(){
    var finalBoard = [];
    for(var i = 0 ; i < 10; i++){
        var row = [];
        for(var j = 0; j < 10; j++){
            var location = new Location();
            row.push(location);
        }
        finalBoard.push(row);
    }
    return finalBoard;
}

function displayboard(board){
    var displayedBoard = " ";
    for(var i = 0; i < 10; i++){
        var row = " ";
        for(var j = 0; j < 10; j++){
            row += board[i][j].display;
        }
        row += "\n";
        displayedBoard += row;
    }
    console.log(displayedBoard)
}