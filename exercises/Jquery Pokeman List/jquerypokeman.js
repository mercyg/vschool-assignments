
$.get("http://pokeapi.co/api/v1/pokedex/1/",function(data){
   // var str = [];
       for(var i = 0; i < data.pokemon.length; i++){
           var pokeman = data.pokemon[i].name;
           
                $("#poke").append(
                    '<div class = "col-sm-4">' + 
                    '<div class = "panel panel-default"' + 
                    '<div class="panel-heading" >' + 'Pokeman' +  '</div>' + '<div class="pannel-body" id = "color">' + pokeman +'</div>'+ '</div>'+'</div>')
//           $("#poke").append( "<div>",{
//               
//           } + pokeman + "</div>" );
//            console.log(pokeman);
     }              
});


