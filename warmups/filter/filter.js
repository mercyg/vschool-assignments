Array.prototype.myFilter = function (callback) {  
  	var array = this;
  	var newarr=[]
  	for(var i = 0 ; i < array.length; i++){
       if(callback(array[i])){
       	newarr.push(array[i])
       }
     
  	}
  	return newarr;
};

var numericArray = [8, 3, 4, 32, 1, 9, 3, 5, 42, 56];

var noLargeNumbers =  numericArray.myFilter(function (element) {  
  return element <= 5;
});

console.log(noLargeNumbers); 