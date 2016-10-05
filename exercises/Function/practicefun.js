var sum = function(a, b){
    console.log(a + b)
}
sum(1,2);


var largest = function(a, b, c){
    if(a >b && a > c){
       console.log("the largest number is " + a);
    }else if(b > a && b > c){
        console.log ("the largest number is " + b);
    }else{
        console.log("the largest number is " + c);
    }
}

largest(2,5,8);

var checking = function(num){
    if(num % 2 === 0){
        console.log("even");
    }else{
        console.log("odd")
    }
}

checking(5)

var phrase = function(str){
    if(str.length <= 20){
        console.log(str + str);
    }else{
        var newstr = str.length/2
        console.log(str.substr(0,newstr))
    }
}

phrase("hellllllllllllllllllll")