function uniqueNumber(arr1,arr2){
    var uniqueArray = []
    var newarr = arr1.concat(arr2);
    for(var i = 0; i < newarr.length; i++){
        if(uniqueArray.indexOf(newarr[i]) === -1){
            uniqueArray.push(newarr[i])
        }
    }
    return uniqueArray;
}

uniqueNumber([1,3,4,5,6], [2,4,2,4,4])