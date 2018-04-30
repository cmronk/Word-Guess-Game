// variables
var peeps = ["sam", "merry", "frodo", "boromir", "gollum", "gandalf", "legolas", "gimli", "aragorn", "arwen"];
var answer = "";
var lettersInWord = [];
var underscores = 0;
var fillBlanks = [];
var wrongGuesses = [];
var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;
var secretMessage = "";

// functions
function startGame () {
    answer = peeps[Math.floor(Math.random() * peeps.length)];
    lettersInWord = answer.split("");
    underscores = lettersInWord.length;  
    document.getElementById("wrongGuesses").innerHTML = ("__________");
    
 
    // reset
    guessesLeft = 10;
    fillBlanks = [];
    wrongGuesses = [];
    

    // blanks
    for (var i = 0; i <underscores; i++) {
        fillBlanks.push("_");
    }

    // populate the underscores and wins/losses
    document.getElementById("wordToGuess").innerHTML = fillBlanks.join(" ");
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("winCount").innerHTML = winCount;
    document.getElementById("lossCount").innerHTML = lossCount;
}


function checkLetters(letter) {
    var isLetterInWord = false;
    for (var i = 0; i <underscores; i++) {
        if (answer[i] === letter) {
            isLetterInWord = true;

        }
    }


//    checking
    if(isLetterInWord) {
        for (var j =0 ; j<underscores; j++) {
            if(answer[j] === letter) {
                fillBlanks[j] = letter;
            }
        }
       
    }
    else {
        wrongGuesses.push(letter);
        guessesLeft--;
    }
}

function endRound() {   
    // if user won
    if (lettersInWord.toString() === fillBlanks.toString()) {
        winCount++;
        alert ("WELL DONE YOUNG HOBBIT!");
        document.getElementById("winCount").innerHTML = winCount;

        startGame();
    }

    // if lost
    else if (guessesLeft === 0) {
        lossCount++;
        alert ("OH NO MORDOR!");
        document.getElementById("lossCount").innerHTML = lossCount;

       startGame();
    }    
    
    // update html
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = fillBlanks.join("  ");
    document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join("  ");
    document.getElementById("wrongGuesses").innerHTML = ("__________");
    

}


startGame();


// get userguess
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    endRound();


}


























