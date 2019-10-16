// Initial state conditions
var wins = 0
var losses = 0
var chance = 100;
var gameLetters = [];
var wordBank = [
  // "computerized", "information", "process", "program", "software", "hardware", "graphical", "error", "charger"];
  "sssssss"];


$(document).ready(function () {
  document.onkeyup = function () {

    // GAME START    
    function selectWord() {
      //  A word is selected from the array and seperated into individual letters
      var gameWord = wordBank[Math.floor(Math.random() * wordBank.length)];
      gameLetters = gameWord.split("");

      //iterate through the array of letters and create a div for each letter
      for (var i = 0; i < gameLetters.length; i++) {
        var blank = $("<p>");
        blank.attr("class", "btn btn-lg btn-secondary unsolved");
        blank.attr("id", gameLetters[i]);
        blank.text(gameLetters[i]);
        //Each letter is added to an opaque div
        $("#mysteryWord").append(blank);
      };
    }
    selectWord();

    // game is "listening" for guesses and judging them. 
    document.onkeyup = function (type) {

        if (type.key.replace(/[^a-z]/g, '')) {
          var guess = type.key.toLowerCase();
          playGame();

          // do {$("#" + guess).removeClass("unsolved").addClass("solved");}
          // while ($("#" + guess).hasClass("unsolved")) 
          function playGame() {
            if ($("#" + guess).hasClass("unsolved")) {
              $("#" + guess).removeClass("unsolved").addClass("solved");
              playGame();
            } else {
              //modify a visual element on the humanoid to show how progress...or regress.
              //decrease chance counter. 
              $("#guessWrong").append(guess);
              chance--
              $("#chancesLeft").text(chance)
              //if counter reaches 0, game over. Advance Loss counter by 1. Start new game!
              if (chance === 0) { location.reload() }
  
            };
          };
          
      };
    };
  };
});


function playGame() {
  if ($("#" + guess).hasClass("unsolved")) {
    $("#" + guess).removeClass("unsolved").addClass("solved");
    playGame();
  } else {
    //modify a visual element on the humanoid to show how progress...or regress.
    //decrease chance counter. 
    $("#guessWrong").append(guess);
    chance--
    $("#chancesLeft").text(chance)
    //if counter reaches 0, game over. Advance Loss counter by 1. Start new game!
    if (chance === 0) { location.reload() }

  };
};
//  Any old incorrect guesses are cleared
//  Winner / Loser message is cleared

// gameplay:
// game is "listening" for guesses and judging them. 
// correct = replace opque div with correct letter
// incorrect = display guess, lower Chances by 1.

// game is won if all letters are guessed correctly with chances left.
//game is lost if all chances are used up and wordis not guessed.

