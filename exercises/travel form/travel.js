var len = document.forms.login.gender.length;
var die = document.forms.login.diet.length;

//console.log(diet);



function myfunction() {
    var type = document.login.gender.value;
    console.log(type);
    var restrication = "  ";
    var name = document.forms.login.firstname.value;
    var second = document.forms.login.lastname.value;
    var age = document.forms.login.age.value;
    //    for(var i = 0; i < len; i++){
    //        if(document.forms.login.gender[i].checked){
    //            var gender = document.forms.login.gender[i].value;
    //        }
    //    }
    var selection = document.login.travel.value;
    for (var i = 0; i < die; i++) {
        if (document.forms.login.diet[i].checked === true) {
            restrication += document.forms.login.diet[i].value;

        }
    }

    //var age = document.forms.login.age.value;
    alert("First Name: " + name + " \n" + "Last Name: " + second + "\n" + "Age: " + age + "\n" + "Gender: " + type + " \n" + "Location: " + selection + " \n" + "Dietery: " + restrication);

}