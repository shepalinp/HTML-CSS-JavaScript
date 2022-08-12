// PLAYER - 01
var randomNum1=Math.floor(Math.random() * 6) + 1;
//mapping random to images in folder
var randomImage1 ="images/dice" + randomNum1 + ".JPG";

var image1=document.querySelectorAll("img") [0]; // player -1
image1.setAttribute("src",randomImage1);



 // player  02 setup

 var randomNum2=Math.floor(Math.random() * 6) + 1;
 var randomImage2 ="images/dice" + randomNum2 + ".JPG";

var image2=document.querySelectorAll("img") [1]; // player -2
image2.setAttribute("src",randomImage2);



// player  03 setup

 var randomNum3=Math.floor(Math.random() * 6) + 1;
 var randomImage3 ="images/dice" + randomNum3 + ".JPG";

var image3=document.querySelectorAll("img") [1]; // player -3
image3.setAttribute("src",randomImage3);



if(randomNum1 > randomNum2)
{
	document.querySelector("h1").innerHTML = "Player 1 Wins !";
}
else if(randomNum2 > randomNum1)
{
	document.querySelector("h1").innerHTML = "Player 2 Wins !";
}

else if(randomNum3 < randomNum1)
{
	document.querySelector("h1").innerHTML = "Player 3 Wins !";
}

else
{
	document.querySelector("h1").innerHTML = "Draw!";
}

