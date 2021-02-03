// alert("hello!");

// an array holding the four colours
let buttonColours = ["red", "blue", "green", "yellow"];

// a new empty array
let gamePattern = [];

// A function to generate a new random number between 0 and 3, stored in a variable called randomNumber
function nextSequence() {
    let randomNumber = Math.floor(Math.random() *4);

// A variable to select a random colour from the buttonColours array.
    let randomChosenColour = buttonColours[randomNumber];

// The new randomChosenColour generated to the end of the gamePattern.
  gamePattern.push(randomChosenColour);

// jQuery to select the button with the same id as the randomChosenColour to make a flash 
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

// Sound for the button colour selected
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
};
