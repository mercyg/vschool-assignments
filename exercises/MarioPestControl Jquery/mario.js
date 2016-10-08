
$("document").ready(function(){
    var coloryellow = $("input").keydown(function(){
        $("input").css("background-color", "yellow");
    });
   var pinkcolor =  $("input").keyup(function(){
        $("input").css("background-color", "pink");
    });
    })
$("#add").click(function(){
       var first = $("#first").val();
        console.log(first);
        var second = $("#second").val();
        var first1 = $("#first1").val();
        console.log(first1)
        var second1 = parseInt($("#second1").val());
        var first2 = parseInt($("#first2").val());
        var second2 = parseInt($("#second2").val());
        var newmultiple = first * second;
        var secondmultiple = first1 * second1;
        var thirdmultiple = first2 * second2;
        var add = newmultiple + secondmultiple + thirdmultiple;
       var audio = $("#mysoundclip")[0];
        audio.play();
        $("#add").html(add);
    })


$(document).ready(function(){
    $("#night").click(function(){
         $("main").toggleClass("change");
         $("h1,h2,h3").toggleClass("change1");
        if($("#night").text() === "Night Mode"){
            $("#night").text("Day Mode");
        }else{
            $("#night").text("Night Mode");
        }
        })
})



//console.log(audio);
//$("button").click(function(){
//    
//})



//var mario = function(){
//    
//    var num1 = parseInt(document.getElementById("first").value);
//    var num2 =parseInt(document.getElementById("second").value);
//     var bombs = parseInt(document.getElementById("first1").value);
//    var bombs1 = parseInt(document.getElementById("second1").value);
//    var cheep = parseInt(document.getElementById("first2").value);
//    var cheep1 = parseInt(document.getElementById("second2").value);
//    
//    var div = document.getElementById("add");
//    var newarr =  num1 * num2;
//    var newarr1 = bombs * bombs1;
//    var newarr2 = cheep * cheep1;
//    
//    div.innerHTML =+ (newarr + newarr1 + newarr2);
//}
