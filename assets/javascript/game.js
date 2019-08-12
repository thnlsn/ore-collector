



// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ALL CURRENT VALUES
var wins = 0;
var losses = 0;
var goal = 0;
var total = 0;
var diamond = 0;
var emerald = 0;
var lapis = 0;
var redstone = 0;
var start = true;


// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ RANDOMIZER FUNCTION (can take any inputs)
function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ STARTS GAME BY RUNNING RANDOMIZER FOR EACH VALUE
function startGame() {
    goal = randNum(19, 120);
    diamond = randNum(1, 12);
    emerald = randNum(1, 12);
    lapis = randNum(1, 12);
    redstone = randNum(1, 12);

    if (start === true) {
        start = false;
    } else if (goal === total) {
        wins++
    } else {
        losses--
    }
}

// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ RUNS THIS FUNCTION ON PAGE LOAD
startGame();

//▓▓▓▓▓▓▓▓▓▓▓▓▓▓ CLICK EVENTS FOR EACH ORE



//▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 



//▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 



//▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 



//▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 



//▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 



//▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 



//▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 



//▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 






























/* ---

    The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 
    Here's how the app works:


There will be four crystals displayed as buttons on the page.
The player will be shown a random number at the start of the game.

When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 


Your game will hide this amount until the player clicks a crystal.
When they do click one, update the player's score counter.


The player wins if their total score matches the random number from the beginning of the game.
The player loses if their score goes above the random number.

The game restarts whenever the player wins or loses.


When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.


The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.



    --- Option 1 Game design notes ---


The random number shown at the start of the game should be between 19 - 120.
Each crystal should have a random hidden value between 1 - 12.

--- */