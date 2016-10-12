function myfunction(){
    var trash = " "
    var score = document.record.highscore.value;
    if (isNaN(score) || score <= 0) {
        alert("Hight Score input not valid. Please enter a number");
    }
//    document.getElementById("submit").onsubmit = function (e) {
//        e.preventDefault();
//    }


    var name = document.record.fullname.value;
    var games = document.record.gameName.value;
    var dates = document.record.date.value;
    var scores = document.record.highscore.value;
    var talks = document.record.talk.length;
    for (var i = 0; i < talks; i++) {
        if (document.record.talk[i].checked === true) {
            trash += document.record.talk[i].value;
        }
    }
    //ar myTable = document.getElementById("mytable");
    
   var tableString =  "<tr><td>" + name + "</td></tr>" ;
   
    document.getElementById("mytable body").innerHTML += tableString;

}

   
