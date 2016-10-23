function first(str){
	for(var i = 0; i < str.length; i++){
		console.log(str[i+1])
		if(str[i] === str[1]){
			continue;
		}else{
			return str[i];
		}
	}
	
}
first("ggggggggxkljfvlsjkfg");