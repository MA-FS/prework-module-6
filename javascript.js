//Original Buttons------------------------------------------------------------
//Grow Button
document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("box").style.height = "300px";
    document.getElementById("box").style.width = "300px";

});

//Blue Button
document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue"; 

});

//Fade Button
document.getElementById("button3").addEventListener("click", function(){

    document.getElementById("box").style.opacity = "0.5";

});

//Reset Button
document.getElementById("button4").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1";
    document.getElementById("box").style.margin = "25px";

});

//Mike's Mayhem------------------------------------------------------------
//Dimensions Button. Using an Alert function to retrieve box dimensions
document.getElementById("button5").addEventListener("click", function(){

    var boxHeight = document.getElementById("box").style.height;
    var boxWidth = document.getElementById("box").style.width;

   alert("The dimensions of the box currently is " + boxHeight + " by " + boxWidth)

});

//Random Colours Button. Randomizing the box colour
document.getElementById("button6").addEventListener("click", function(){

    var randomColour = '#'+Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("box").style.backgroundColor = randomColour;

});

//Halve Button. Using parseInt to manipulate the dimensions using arithmetic
document.getElementById("button7").addEventListener("click", function(){

    var boxHeight = parseInt(document.getElementById("box").style.height, 10);
    var boxWidth = parseInt(document.getElementById("box").style.width, 10);
    var boxHeightNew = boxHeight * 0.5;
    var boxWidthNew = boxWidth * 0.5;

    document.getElementById("box").style.height = boxHeightNew + "px";
    document.getElementById("box").style.width = boxWidthNew + "px";    

});

//Double Button. Using parseInt to manipulate the dimensions using arithmetic
document.getElementById("button8").addEventListener("click", function(){

    var boxHeight = parseInt(document.getElementById("box").style.height, 10);
    var boxWidth = parseInt(document.getElementById("box").style.width, 10);
    var boxHeightNew = boxHeight * 2;
    var boxWidthNew = boxWidth * 2;

    document.getElementById("box").style.height = boxHeightNew + "px";
    document.getElementById("box").style.width = boxWidthNew + "px";    

});

//CSS Classes------------------------------------------------------------
//Underline Toggle Button. Using an If / Else statement to change class
document.getElementById("button9").addEventListener("click", function(){

    if (document.getElementById("button9").className == 'underline') {
        document.getElementById("button9").className = null;
    } else {
        document.getElementById("button9").className = 'underline';
    }
});