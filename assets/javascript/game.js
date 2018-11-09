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




