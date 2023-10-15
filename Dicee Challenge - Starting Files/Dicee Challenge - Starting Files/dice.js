var randomnumber1=Math.floor(Math.random()*6)+1;
//console.log(Math.round(randomnumber1))
var dimg="dice"+ randomnumber1 + ".png";
//console.log(dimg)
var rimg="images/" + dimg;
console.log(rimg)
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", rimg);
var randomnumber2=Math.floor(Math.random()*6)+1;
var dimg1="dice"+randomnumber2+".png";
var rimg1="images/"+dimg1;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", rimg1);
if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player1 Wins!"
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="Player2 Wins!"
}
else{
    document.querySelector("h1").innerHTML="Match Drawn!"
}
