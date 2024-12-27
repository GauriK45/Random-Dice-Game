// dice 1
var randomNumber1 = (Math.floor(Math.random() * 6)+1);
var imageNewUrl1 = "./images/dice"+randomNumber1+".png";
console.log(randomNumber1);
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageNewUrl1 );

// dice 2
var randomNumber2 = (Math.floor(Math.random() * 6)+1);
var imageNewUrl2 = "./images/dice"+randomNumber2+".png";
console.log(randomNumber2);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imageNewUrl2 );

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="&#127881; Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins &#127881;";
}else if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML="&#127884; Its a Draw &#127884;";
}