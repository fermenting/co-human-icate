// Initial state conditions
var wins = 0
var losses = 0
var chance = 7;
var wordBank = [
  "computer", "information", "process", "program", "software", "hardware", "graphics", "error", "design"];

$(document).ready(function () {
  console.log("ready!!");

  document.onkeyup = function () {

    // GAME START    
    //  A word is selected from the array 
    var gameWord = wordBank[Math.floor(Math.random()*wordBank.length)];

    //  Word is seperated into individual letters

    var gameLetters = gameWord.split("");

    //iterate through the array of letters and create a div for each letter

    for (var i = 0; i < gameLetters.length; i++) {

      var blank = $("<p>");

      blank.attr("class", "btn btn-lg btn-secondary unsolved");

      blank.attr("id", gameLetters[i]);

      blank.text(gameLetters[i]);

      //Each letter is added by an opaque div
      $("#mysteryWord").append(blank);

    }
    // GAMEPLAY - We have to start logging key strokes now, otherwise the process will register the next keystroke to load up another word.


    // game is "listening" for guesses and judging them. 

    document.onkeyup = function (blaze) {

      var guess = blaze.key.toLowerCase().replace(/[^a-z]/g,'');
      console.log(guess)

      for (c = 0; c < gameLetters.length; c++)
        if (guess === gameLetters[c]) {
          //use the id of the element to change the class to ".solved"
          $("#"+guess).removeClass("unsolved").addClass("solved")

          //check for unsolved elements. if no unsolved elements, game is won! Advance win counter by 1. Start new game!
          // .hasClass("unsolved")
        }

        else {

          console.log("wrong")
          //modify a visual element on the humanoid to show how progress...or regress.
          //decrease chance counter. if counter reaches 0, game over. Advance Loss counter by 1. Start new game!
        }

        $("#guessWrong").append(guess);
        chance--
        $("#chancesLeft").append(chance)
        console.log(chance);

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

