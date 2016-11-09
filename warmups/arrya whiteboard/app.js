function whiteboard(arr){
    var arrNumber = [];
    var arrString = [];
    var arrArrays = [];
    var arrObjects = [];
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] === "number" ){
           arrNumber.push(arr[i]);
        }else if(typeof arr[i] === "string"){
            arrString.push(arr[i]);
        }else if(typeof arr[i] === "object"){
            for(var prop in arr[i]){
                arrObjects.push(prop + ":" + arr[i][prop] )
            }
        }else if(typeof arr[i] === "array"){
            arrObjects.push(arr[i])
        }
    }
    
    return arrNumber + arrString + arrArrays + arrObjects;
}
console.log(whiteboard([1, 4, 3, 23, "candy", "corn", "is", "the", "best", [1],["dogs", 2], { keys: "values", numbers: 7}]));
            