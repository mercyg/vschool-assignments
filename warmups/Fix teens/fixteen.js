var noTeeSum = function(a, b, c){
    a=fixTeen(a);
    b=fixTeen(b);
    c=fixTeen(c);
    return a + b + c;
}

var fixTeen = function(n){
    if(n < 19 && n > 16 || n === 14 || n === 13){
        n = 0;
    }
    return n;
}