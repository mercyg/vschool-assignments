var div = document.getElementById("newID")

var large = function(num1,num2){
    if(num1< num2){
        div.innerHTML = div.innerHTML + num2;
    }else{
        div.innerHTML = div.innerHTML + num1;
    }
}

var moneky = function(aSmile,bSmile){
    if(aSmile && bSmile){
        console.log("true");
    }else if(aSmile || bSmile){
        console.log("false")
    }
}

moneky(true,false)
  

    
var dates = new Date()

  if(dates.getHours() < 12 ){
      console.log("Good Morning");
  }else if(dates.getHours() < 18 ) { 
      console.log("Good Afternoon");
   }else{
       consoel.log("Good Evening");
   }


