var player = {
    name: 'luigi',
   totalCoins: 45,
    status: "small",
    isstarActive: false,
    setName :function(namePicked){
       if(toLowerCase(namePicked==="mario")){
           this.name = "Mario";
       }else if(toLowerCase(namePicked === "luigi")){
           this.name = "Luigi"
       }
    },
    gotHit :function(){
        switch(player.status){
            case "Powered up":
                this.status = "big";
                break;
            case "big":
                this.status = "small";
                break;
            default:
                this.status = "dead";
                this.gameActive = false;
        }
    },
    gotPoweup: function(){
       switch(player.status){
           case "big":
               this.status = "poweredUp";
           case "small":
               this.status = "big"
       }
    },
    isgameActive: true,
    addCoin:function(){
        this.totalCoins++;
    },
    print:function(){
       console.log(this.name,this.totalCoins,this.status,this.star)
    
}
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function printf(){
    var random = getRandomInt(0,1);
    if(random === 0){
        player.gotHit();
    }else if(random === 1){
        player.gotPoweup();
    }else{
        player.addCoin();
    }
}

for(var i = 0; i < 3; i++){
    printf();
}