<script src="underscore-min.js"></script>

var number = [1,1,2,3,1];

for(var i = 0; i < number.length; i++){
    if(number[i] === 1 && number[i+1] && number[i+2]){
        return true;
    }
}


function(arr){
    for(var i = 0; i < number.length; i++){
    if(number[i] === 1 && number[i+1] && number[i+2]){
        return true;
    }
  }
    return false;

}
