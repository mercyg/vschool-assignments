

var mario = function(){
    
    var num1 = parseInt(document.getElementById("first").value);
    var num2 =parseInt(document.getElementById("second").value);
     var bombs = parseInt(document.getElementById("first1").value);
    var bombs1 = parseInt(document.getElementById("second1").value);
    var cheep = parseInt(document.getElementById("first2").value);
    var cheep1 = parseInt(document.getElementById("second2").value);
    
    var div = document.getElementById("add");
    var newarr =  num1 * num2;
    var newarr1 = bombs * bombs1;
    var newarr2 = cheep * cheep1;
    
    div.innerHTML =+ (newarr + newarr1 + newarr2);
}
