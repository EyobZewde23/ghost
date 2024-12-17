function rolldice(){
    var random= Math.floor(Math.random()*6)+1
    var resultrandom="images/dice"+random+".png"
    return {number: random , image: resultrandom};
};
function playerroll(){
    var roll1=rolldice()
    var roll2=rolldice()
    document.querySelector(".image1").setAttribute("src", roll1.image)
    document.querySelector(".image2").setAttribute("src", roll2.image)
    if (roll1.number > roll2.number){
        document.querySelector("h1").innerHTML="player 1 win"
    }
    else if (roll1.number < roll2.number){
        document.querySelector("h1").innerHTML="player 2 win"
    }
    else{
        document.querySelector("h1").innerHTML="Draw"
    }
};
document.querySelector(".btn").addEventListener("click",playerroll);
