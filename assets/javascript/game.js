// var letterGuessed = [];
// var guessesLeft = 10;
// var wins = 0;

// var computerGuess = 
// String.fromCharCode(
//     Math.round(Math.random()* 26) + 97
// );
// console.log(computerGuess);
// document.onkeyup = function(event) {
//     var keypress =(String.fromCharCode(event.keyCode)).toLowerCase();
//     addLetter(keyPress);
// }
// function addLetter (userKeypress) {
//     var repeatGuess = letterGuessed.some(function(item){

//     })
//     if (repeatGuess){
//         alert(userKeypress + " already guessed. Try again!");
//     } else {
//         letterGuessed.push(userKeypress);
//         console.log(letterGuessed);
//         showLetterGuessed();
//         guessMatch(userKeypress);
//     }
// }
// function showLetterGuessed() {
//     var tempStr = letterGuessed.join(", ");
//     document.getElementById("user'sGuess").innerHTML = tempStr;

// }
// function guessMatch(charachter) {
//     console.log(charachter);
//     console.log(computerGuess);

//     if (charachter === computerGuess) {
//         alert("You win");
//         wins= wins +1;
//         showWins();

//     } else if (guessesLeft === 0) {
//         alert("Game over! Play again");
//         resetVariables();
//     } else {
//         guessesLeft = guessesLeft -1;
//         showGuessesRemaining();
//     }
// }
// function showWins() {
//     document.getElementById("numWins").innerHTML = wins;
// }
// function showGuessesRemaining() {
//     document.getElementById("numGuesses").innerHTML = guessesLeft;
// }


// function resetVariables () {
//     letterGuessed = [];
//     guessesLeft = 10;
// }
// function startGame() {
//     showGuessesRemaining();
//     showWins ();
// }
// startGame();


var words = [
    "mouse",
    "cat",
    "infinity",
    "apple",
    "jeapardy"
];
var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;

while (remainingLetters > 0) {
    alert(answerArray.join(" "));
    var guess = prompt("Guess a letter, or click cancel to stop playing.");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}
alert(answerArray.join(" "));
alert("The answer was " + word);


    //         var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];           
    //         for (var i = 0; i < letters.length; i++) {
    //         var letterButton = ("<button>");
    //         $(".letter-button").on("click", function() {
    //             var fridgeMagnet = $("<div>");
    //             fridgeMagnet.addClass("letter fridge-color");
    //             fridgeMagnet.text($(this).attr("data-letter"));
    //             $("#display").append(fridgeMagnet);

    //       });

    //         }
    //     }
    // }

  










// alert('Lest Play HangMan!');

// var answer = 3;

// var guess= prompt('Guess your first word');
// for (i=0; i<10; i++) {
// guess = prompt('Guess your first word');
// if(answer==guess) {
//     alert("You guessed correct")
//     break;
// } else {
//     guess = prompt("Please try again");

