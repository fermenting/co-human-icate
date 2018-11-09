// JS LOGIC TIME

// ok doke. We need a ton of things:
// An array of words for the game to pull from for gameplay
// for the browser to watch for an initial key stroke to start
//upon start:
//  A word is selected from the array
//  Word is seperated into individual letters
//  Each letter is represented by an opaque div
//  Chances is set to 7. for repeat games, this value is reset to 7 (for later: easy mode with more guesses?!)
//  Any old incorrect guesses are cleared
//  Winner / Loser message is cleared

// gameplay:
// game is "listening" for guesses and judging them. 
// correct = replace opque div with correct letter
// incorrect = display guess, lower Chances by 1.

// game is won if all letters are guessed correctly with chances left.
//game is lost if all chances are used up and wordis not guessed.

// Let's break it up and code what we know!

// Initial state conditions
var wins = 0
var losses = 0


// An array of words for the game to pull from for gameplay
$(document).ready(function() {
console.log ("ready!!");

var wordBank = [
    "computer",
 "information", 
 "process",
  "program",
   "software",
    "hardware",
     "graphics",
      "error",
       "design"];

// console.log(wordBank);

document.onkeyup = function(stroke){

var keyed =stroke.key.toLowerCase();

// console.log(keyed);

// for the browser to watch for an initial key stroke to start

// var hangMan = $("#mysteryWord");
// console.log (hangMan);

  // GAME START    

  //  A word is selected from the array 
var gameWord = wordBank[Math.floor(Math.random() * wordBank.length)];

// console.log(gameWord);
//  Word is seperated into individual letters

var gameLetters = gameWord.split("");  
    
// console.log(gameLetters);

//  We need those letters! We need a for loop! We will iterate through the array of letters and create a div for each letter

for (var w=0; w<gameLetters.length; w++){
    
    var blank = $("<button>");
    
    blank.attr("class", "btn btn-lg btn-secondary unsolved");

    blank.attr("id", gameLetters[w]);
    
    blank.text(gameLetters[w]);

//Each letter is added by an opaque div
    $("#mysteryWord").append(blank);


}
    // GAMEPLAY - We have to start logging key strokes now, otherwise the process will register the next keystroke to load up another word.


//  Chances is set to 7. for repeat games, this value is reset to 7 (for later: easy mode with more guesses?!)

var chance = 7;

// game is "listening" for guesses and judging them. 

document.onkeyup = function(blaze){

    var guess =blaze.key.toLowerCase();

    console.log(guess)

for (c = 0; c<gameLetters.length; c++ )    
 if (guess === gameLetters[c]) {
    console.log ("correct")

    //use the id of the element to change the class to ".solved"
    //check for unsolved elements. if no unsolved elements, game is won! Advance win counter by 1. Start new game!

 }
 
 else {

    console.log("wrong")

    //decrease chance counter. if counter reaches 0, game over. Advance Loss counter by 1. Start new game!
 }






 // var stank = $(gameletters[c]);   

//     stank.attr("class", "btn btn-lg btn-secondary wrong");

//     stank.attr("data-letter", guess);
    
//     stank.text(guess);

// //Each letter is added by an opaque div
//     $("#guessWrong").append(stank);
 };




};


});











//  Any old incorrect guesses are cleared
//  Winner / Loser message is cleared

// gameplay:
// game is "listening" for guesses and judging them. 
// correct = replace opque div with correct letter
// incorrect = display guess, lower Chances by 1.

// game is won if all letters are guessed correctly with chances left.
//game is lost if all chances are used up and wordis not guessed.


/*
EXTRA CODE
stuff I wrote that I clipped, moved down here for clarity or to repurpose. We all have some extra DNA just floating about.


// $("#mysteryWord").on("click", function(){ 

  gameWord.split("");

*/