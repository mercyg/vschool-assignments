var readline = require('readline-sync');


function calculator(num1,num2,perform){
    if(perform === "add"){
        var additon = require("./add")
        additon.add(num1,num2);
    }else if(perform === "substruction"){
        var substruction = require("./sub")
        substruction.sub(num1,num2);
    }else if(perform === "multiply"){
        var multiply = require("./multiply")
        multiply.multiplication(num1,num2);
    }
}

calculator(1, 2 ,"multiply");