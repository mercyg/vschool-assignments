
//console.log(num1);
//num1 = parseInt("num1");
//num2 = parseInt("num2");

//var arr = ["add", "subtract", "multiply"];

var div = document.getElementById("add");
var div1 = document.getElementById("sub");
var div2 = document.getElementById("mult");
var calculate = function(index){
var arr = ["add","subtract", "multiply"];
 var num1= parseInt(document.getElementById("first").value);
var num2 = parseInt(document.getElementById("second").value);
    if(index === 0){
        div.innerHTML =+ (num1 + num2);
    }else if(index === 1){
        div1.innerHTML =+ (num1 - num2);
}else if(index ===2){
    div2.innerHTML =+ (num1 * num2);
}       
       //console.log(num1 + num2);
}
//calculate(1,2);