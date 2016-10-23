function myfunction(){
    
    var trash = ""
    var score = document.record.highscore.value;
    if (isNaN(score) || score <= 0) {
        alert("Hight Score input not valid. Please enter a number");
    };
    
//    document.getElementById("record").onsubmit = function (event) {
//        event.preventDefault();
//    }

    var notReload = document.record;
     notReload.submit = function(){
         return false;
     }
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
    
   var tableString =  "<tr><td>" + name + "</td>" + "<td>" + games + "</td>" + "<td>" + dates + "</td>" + "<td>" + scores + "</td>" +  "<td>" + trash + "</td></tr>" ;
   
    document.getElementById("body").innerHTML += tableString;

}

   
