function luckySum(a,b,c){
	if(a != 13 && b != 13 && c != 13){
		return a + b + c;
     }else if(c === 13){
     	return a + b;
     }else if(b === 13){
     	return a;
     }
}

console.log(luckySum(1,2,3));
console.log(luckySum(1,2,13));
console.log(luckySum(1,13,3))