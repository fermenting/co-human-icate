//TODO
//Mobile - appearance & keyboard
//fix click cheat
//readme
//refactor
//


// Initial state conditions
var wins = 0;
var losses = 0;
var chance = 7;
var gameLetters = [];
var uniqueLetters = 0;
var alreadyGuessed = {};
var wordBank = [
  "computerized", "information", "process", "program", "software", "hardware", "graphical", "error", "charger", "debugging", "networking"];
var guess;

selectWord();
keyListen();

function keyListen() {
  $(document).ready(function () {
    document.onkeyup = function (type) {

      guess = type.key
      console.log(guess)
      guess = isLetter(guess.toLowerCase());

      if (!alreadyGuessed[guess]) {
        alreadyGuessed[guess] = true;
        playGame();
      }
    };
  });
};


function isLetter(str) {
  return str.length === 1 && str.match(/^[A-Za-z]+$/i);

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
    var blank = $("<btn>");
    blank.addClass("btn btn-lg btn-secondary unsolved " + gameLetters[i]);
    blank.text(gameLetters[i]);
    //Each letter is added to an opaque div
    $("#mysteryWord").append(blank);
  };
}

function playGame() {
  if ($("." + guess).hasClass("unsolved")) {
    $("." + guess).removeClass("unsolved").addClass("solved");
    uniqueLetters--;
    if (uniqueLetters === 0) {
      wins++;
      $("#wins").text(wins);
      $("#chancesLeft").prepend("you WON with ")
      $("#chancesLeft").append(" chances left!")
      gameOverScreen();
  }
  } else {
    //modify a visual element on the humanoid to show how progress...or regress.
    //decrease chance counter. 

    var blank = $("<btn>");
    blank.addClass("btn btn-lg text-danger wrong" + guess);
    blank.text(guess);
    $("#guessWrong").append(blank);
    chance--
    $("#chancesLeft").text(chance)
    //if counter reaches 0, game over. Advance Loss counter by 1. Start new game!
    if (chance < 1) {
      losses++;
      $("#losses").text(losses)
      $("#chancesLeft").html("none, because you LOST!")
      gameOverScreen();
    };
  };
};

function gameOverScreen(){
  document.onkeyup = function (type) {
    if (type.key) {
      newGame();
      keyListen();
    };
  };
}