// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ALL CURRENT VALUES
var wins = 0;
var losses = 0;
var goal = 0;
var total = 0;
var diamond = 0;
var emerald = 0;
var redstone = 0;
var lapis = 0;
var start = true;

// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ UPDATES HTML ELEMENTS
function update(id, value) {
//  document.getElementById(id).innerHTML = value;
    $(id).html(value);
};

// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ RANDOMIZER FUNCTION (can take any inputs)
function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ STARTS GAME BY RUNNING RANDOMIZER FOR EACH VALUE
function startGame() {
    goal = randNum(19, 120);
    diamond = randNum(1, 12);
    emerald = randNum(1, 12);
    redstone = randNum(1, 12);
    lapis = randNum(1, 12);
    console.log("The goal is " + goal);
    console.log("The value for the diamond ore is " + diamond);
    console.log("The value for the emerald ore is " + emerald);
    console.log("The value for the redstone ore is " + redstone);
    console.log("The value for the lapis lazuli ore is " + lapis);

    update("#goal-amount", goal);
    update("#total-amount", total);
    update("#win-count", wins);
    update("#loss-count", losses);
}

// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ RUNS THIS FUNCTION ON PAGE LOAD
startGame();

// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ CLICK EVENTS FOR EACH ORE
$("#dia-ore").click(function() {
    addToTotal(diamond);
    console.log(total);
    update("#total-amount", total);
    $("#dia-ore").shake(10,5,1);
    winLossCheck();
});

$("#em-ore").click(function() {
    addToTotal(emerald);
    console.log(total);
    update("#total-amount", total);
    $("#em-ore").shake(10,5,1);
    winLossCheck();
  });

$("#red-ore").click(function() {
    addToTotal(redstone);
    console.log(total);
    update("#total-amount", total);
    $("#red-ore").shake(10,5,1);
    winLossCheck();
});

$("#blu-ore").click(function() {
    addToTotal(lapis);
    console.log(total);
    update("#total-amount", total);
    $("#blu-ore").shake(10,5,1);
    winLossCheck();
});

//▓▓▓▓▓▓▓▓▓▓▓▓▓▓ FUNCTION TO ADD TO TOTAL
function addToTotal(amount) {
    total = amount + total;
    return total;
};

//▓▓▓▓▓▓▓▓▓▓▓▓▓▓ FUNCTION TO CHECK IF WIN/LOSS
function winLossCheck() {
    if (start === true) {
        start = false;
    } else if (goal === total) {
        wins++
        update("#win-count", wins);
        total = 0;
        alert("Congratulations, you won!");
        startGame();
    } else if (total > goal) {
        losses++
        update("#loss-count", losses);
        total = 0;
        alert("Sorry, you lost!");
        startGame();
    }
}

//▓▓▓▓▓▓▓▓▓▓▓▓▓▓ FUNCTION TO SHAKE ORE
jQuery.fn.shake = function(interval,distance,times){
    interval = typeof interval == "undefined" ? 100 : interval;
    distance = typeof distance == "undefined" ? 10 : distance;
    times = typeof times == "undefined" ? 3 : times;
    var jTarget = $(this);
    jTarget.css('position','relative');
    for(var iter=0;iter<(times+1);iter++){
       jTarget.animate({ left: ((iter%2==0 ? distance : distance*-1))}, interval);
    }
    return jTarget.animate({ left: 0},interval);
 }