function vowel(str){
    var newstr = str.toLowerCase().split("");
   var vowelless = [];
   for (var i = 0; i < newstr.length; i++) {
       if (newstr[i] != 'a' && newstr[i] != 'e' && newstr[i] != 'i' && newstr[i] != 'o' && newstr[i] != 'u') {
           vowelless.push(newstr[i])
       }
   }
   return vowelless;
}

console.log(vowel("meheret"));