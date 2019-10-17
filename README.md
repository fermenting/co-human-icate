

# I Guess, therefore I am?
Try to guess the word, letter by letter. You have a limited amount of guesses. Do you think you can...[co-human-icate?](https://fermenting.github.io/co-human-icate/)


## All Kidding Aside

This is game based on the classic "hangman" where a mysterious word is selected, and then the guesser only knows how many letters are in the word. As they guess, the blanks are filled in for correct guesses, and incorrect guesses are counted. Hopefully the guesser can guess the word before they run out of guesses!

### Installation?

I have primarily tested this on Chrome & Firefox desktop browsers. In testing on mobile, I've noticed there is no way to type guesses. Rest assured, I will tackle this challenge in my next phase of improvements.

### Learning by Doing

My goal for this game was to use a basic knowledge to create an authentic gaming experience. I had a lot of fun struggling with how to digitally represent the logic of a simple game, and every achievement coded inspired another way to make the code better.

I tried to limit my technologies to the following:

* __HTML__ _The backbone of any webpage_
* __Javascript__ _The logical powerhouse driving the game_
* __Jquery__ _Some really nifty javascript shortcuts_
* __CSS__ _how the page is styled_
* __Bootstrap__ _a framework to speed up styling & layout_

### Technical Debts

There are a few issues still, such as _(spoiler alert!)_ you can click on the unguessed letter tiles and see what the letter should be. I suspect this is due to some baked-in bootstrap button functionality. I don't need to use buttons to represent the letters to guess, I just chose that to expedite development.

my keylistener is including keys such as Shift, Alt, and Ctrl, which I need to exclude from gameplay.

In game.js, I noticed an arrow anti-pattern developing, which I tried to mitigate by separating functionality to separate functions. I would like to refactor it and make clean, as well as optimize it to O(n) or faster.

As mentioned, the game is not mobile friendly - that is the next major aspect I would like to develop.

I would like to make it possible for a user to create their own word bank, and send to other people to play.

## Thanks 

* To you, for playing my game or reading my code.
* To Jerome, Jimmy, & Sasha for showing me the way
* Stack Overflow, W3Schools, Google, Github & Good Documentation everywhere!
* To Laura & Merlin, for their inspiration.
