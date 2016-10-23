var newarr = [];


function camel(str){
   var letterArray =  str.split('');
    for(var i = 0; i < str.length; i++){
        if(str[i] === ' '|| str[i] === '-' || str[i]=== '_'){
		var cap=str[i+1].toUpperCase();
		newarr.push(cap);
		i++;
	}else{
		newarr.push(str[i]);
	}
    }
    
}

function('hello hi')