function great(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] >= 6){
            continue 
        }else{
            sum += arr[i]
        }
        
    }
    return sum
}
console.log(great([1, 2, 2])); 
console.log(great([1, 2, 2, 6, 99, 99, 7]))
console.log(great([1, 1, 6, 7, 2]));
