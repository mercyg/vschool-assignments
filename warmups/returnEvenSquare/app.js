function sumArray(n){
  sum = 0;
  var newarr = []
  var square = n * n;
  for(var i = 1 ; i < n; i++){
    newarr.push(i * i)
  }
  for(var i = 0 ; i < newarr.length; i++){
    if(newarr[i] % 2 === 0){
      sum += newarr[i]
    }
  }
  return sum
}

console.log(sumArray(5))