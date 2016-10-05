var arr = ["This", "hit", "that","ice", "cold",
              "Michelle", "pfeiffer", "that", "white","gold", "This", "one", "for", "them", "hood", "girls", "Them", "good", "girls",  "straight", "masterpieces", "Stylin'", "whilen'", "livin'", "it", "up", "in", "the", "city","Got","Chucks", "on"];

var uptown = function(){
    var lyricString = arr.join(" ")
        console.log(lyricString);
    
}

var reverse = function(){
    var reverseArr = arr.reverse();
   console.log(reverseArr.join(" "));
}

var everyOther = function(){
    var emetarr = [];
    for(var i = 0; i < arr.length; i= i + 2){
        console.log(emetarr.push(arr[i]));
    }
}

var reverseTwo = function(){
    var newarr = []
    for(var i = 0; i < arr.length; i+= 2){
        newarr.push(arr[i])
        
    }
        
}