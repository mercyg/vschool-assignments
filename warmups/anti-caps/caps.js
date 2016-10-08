function isCaps(letter) {
    return letter === letter.toUpperCase();
}

function antiCaps(letter) {
    return letter === letter.toLowerCase();
}

var antiCaps = function (str) {
        var newstr = str.split("");
        var arr = [];
        //var newstr = ""
        for (var i = 0; i < newstr.length; i++) {
            if (isCaps(newstr[i]) {
                    arr.push(newstr[i].toLowerCase())

                } else if (antiCaps(str[i])) {
                    arr.push(newstr[i].toUpperCase());
                }
        }
       return arr.join("");
}