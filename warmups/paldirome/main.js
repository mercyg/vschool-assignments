var newarr =[];
function paldrome(str){
    var newstr = str.split("")
    if(newstr === newstr.reverse()){
        return true;
    }
    else {
        return false;
    }
}