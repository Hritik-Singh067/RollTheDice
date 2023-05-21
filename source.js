//Generating random numbers between 1 to 6
var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);

//Selecting the images
var player1Dice = document.querySelector(".img1");
var player2Dice = document.querySelector(".img2");

//chaging the image source based on random number
player1Dice.setAttribute("src", "images/dice"+randomNumber1+".png");
player2Dice.setAttribute("src", "images/dice"+randomNumber2+".png");

//Selecting the heading
var title = document.querySelector("h1");

//Comparing the score and declaring winner
if(randomNumber1>randomNumber2){
    title.textContent="🚩Player 1 wins";
}
else if(randomNumber2>randomNumber1){
    title.textContent="Player 2 wins🚩";
}
else{
    title.textContent="Draw";
}