//TODO
//do nothing when a mistake letter is repeated
//make CSS better
//fix hover cheat
//readme
//github pages
//organize, DRY

// Initial state conditions
var wins = 0;
var losses = 0;
var chance = 7;
var gameLetters = [];
var uniqueLetters = 0;
var alreadyGuessed = {};
var wordBank = [
  "computerized", "information", "process", "program", "software", "hardware", "graphical", "error", "charger", "debugging", "networking"];

selectWord();
keyListen();

function keyListen() {
  $(document).ready(function () {
    document.onkeyup = function (type) {


      // GAME START    
      var guess = type.key.replace(/[^A-Za-z]+$/g, '').toLowerCase()
      console.log("guess " + guess)


      // if (type.key.replace(/[^a-z]/g, '')) {
      //   var guess = type.key.toLowerCase();
      //   console.log(guess)
      if (!alreadyGuessed[guess]) {
        alreadyGuessed[guess] = true;

        playGame();
        

        function playGame() {
          if ($("." + guess).hasClass("unsolved")) {
            $("." + guess).removeClass("unsolved").addClass("solved");
        
            uniqueLetters--;
            if (uniqueLetters === 0) {
              wins++;
              $("#wins").text(wins);
              newGame();
            }
          } else {
            //modify a visual element on the humanoid to show how progress...or regress.
            //decrease chance counter. 
            $("#guessWrong").append(guess);
            chance--
            $("#chancesLeft").text(chance)
            //if counter reaches 0, game over. Advance Loss counter by 1. Start new game!
            if (chance < 1) {
              losses++;
              $("#losses").text(losses)
              newGame();
            };
          }
        };


      } else {
        return
      }
    };
  });
};

function newGame() {
  $("#mysteryWord").empty();
  $("#guessWrong").empty();
  alreadyGuessed = {};
  selectWord();
}

function selectWord() {
  chance = 7
  $("#chancesLeft").text(chance)
  //  A word is selected from the array and seperated into individual letters
  var gameWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  gameLetters = gameWord.split("");
  //count the number of unique letters
  uniqueLetters = new Set(gameLetters).size
  //iterate through the array of letters and create a div for each letter
  for (var i = 0; i < gameLetters.length; i++) {
    var blank = $("<p>");
    blank.addClass("btn btn-lg btn-secondary unsolved " + gameLetters[i]);
    blank.text(gameLetters[i]);
    //Each letter is added to an opaque div
    $("#mysteryWord").append(blank);
  };
}



// var already = false;
//         for (var i = 0; i < alreadyGuessed.length; i++) {
//           if (guess === alreadyGuessed[i]) {
//             already = true
//           }
//           if (already) {
//             already = false;
//             return
//           }
//           else {



  // switch (guess) {
  //   case 
  // }
