var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];

function attemptCall(name, callback1, callback2, callback3) {
    if (hasDuplicates = (/([a-z])\1/i).test(name)) {
        callback3();
        if (name.length % 2 === 0) {
            callback2();
        } else {
            callback1();
        }
    }
}

for (var i = 0; i < names.length; i++) {
    attemptCall(names[i], dontCall, call, sendText)
}



function dontCall() {
    console.log("You did not call " + names[i]);
}

function call() {
    console.log("You called " + names[i]);
}

function sendText() {
    console.log("You texted " + names[i]);
}


//attemptCall();