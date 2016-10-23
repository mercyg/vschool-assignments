//AJAX REQUEST IN JAVASCRIPT

function parsePokemon(){
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var jsonData = xhr.responseText;
            var data = JSON.parse(jsonData);
            var pokman = data.objects[0].pokemon
            var pokmanlist = document.getElementById("pokemon")
        pokman.forEach(function(monster){
            pokmanlist.innerHTML += "<li>" + monster.name + "</li>"
        })//simimalr to for loop 
           
        }
    }
    
    xhr.open("GET", "http://api.vschool.io:6543/pokemon.json",true);
    xhr.send();
    
}

parsePokemon();