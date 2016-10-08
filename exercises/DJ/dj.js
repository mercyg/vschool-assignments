var demo = document.getElementById("#box");

demo.addEventListener("mouseover", colorChange);

function colorChange(){
    document.getElementById("#box").style.backgroundColor = "blue";
}
