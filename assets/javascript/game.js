// console.log("hello")
var allPossibleWords = ["dooku", "vader", "maul", "stormtrooper", "snoke", "revan", "grievous"]; 
var wordToGuess = "";
var lettersInWord = [];
var spaces = 0;
var guesses = 10;
var letterGuesses = [];
var wrongGuesses = [];
var wins = 0;
var losses = 0;





function pressStart () {
    // Get word to guess from array
    wordToGuess = allPossibleWords[Math.floor(Math.random()*allPossibleWords.length)];
    lettersInWord = wordToGuess.split("");
    spaces = lettersInWord.length;
    
    // Reset
    guesses = 10;
    wrongGuesses = [];
    letterGuesses= [];


    
    for (var i=0; i<spaces; i++) {
        letterGuesses.push("_");
    } 
    
    document.getElementById("wordToGuess").innerHTML = letterGuesses.join(" ");
    document.getElementById("guessLeft").innerHTML = guesses;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    
    
    // TESTING DOM MANIPULATION
    console.log(wordToGuess);
    console.log(lettersInWord);
    console.log(spaces);
    console.log(letterGuesses);
}

pressStart();

document.onkeyup = function (event) {
    var keyPushed = String.fromCharCode(event.keyCode).toLowerCase();
    findLetter(keyPushed);
    gameOver();
    
    // TESTING BUTTON PUSH EVENT
    console.log(keyPushed);
}

function findLetter (letter) {
  
    var doesLetterMatch = false;

  for (var i=0; i<spaces; i++) {
      if (lettersInWord[i] == letter) {
          doesLetterMatch = true;
      }
  }

    if (doesLetterMatch) {
        for (var i=0; i<spaces; i++) {
            if (lettersInWord[i] == letter) {
                letterGuesses[i] = letter;
            }
        }
    }
  
    else {
        wrongGuesses.push(letter);
        guesses--;
    }

    // TESTING
    console.log(letterGuesses);
}

function gameOver() {
    console.log("Win Count: " + wins + "| Loss Count: " + losses + "| Guesses left: " + guesses);

    if (lettersInWord.toString() == letterGuesses.toString()) {
        wins++;
        alert("You Win!");
        document.getElementById("wins").innerHTML = wins;
        
        pressStart();
    }

    else if (guesses == 0) {
        losses++;
        alert("You Lost!");
        document.getElementById("losses").innerHTML = losses;

        pressStart();
    }

    document.getElementById("guessLeft").innerHTML = guesses;
    document.getElementById("wordToGuess").innerHTML = letterGuesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" ");
}