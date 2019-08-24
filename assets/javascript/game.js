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
    for (var j = 0; j<word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
        }
        // var letterButton = ("<button>");
        // $(".letter-button").on("click", function() {
        //     var fridgeMagnet = $("<div>");
        //     fridgeMagnet.addClass("letter fridge-color");
        //     fridgeMagnet.text($(this).attr("data-letter"));
        //     $("#display").append(fridgeMagnet);

    //   });

        }
    }
}

alert(answerArray.join(" "));
alert("Good Job! The answer was " + word);










// alert('Lest Play HangMan!');

// var answer = 3;

// var guess= prompt('Guess your first word');
// for (i=0; i<10; i++) {
// guess = prompt('Guess your first word');
// if(answer==guess) {
    // alert("You guessed correct")
    // break;
// } else {
    // guess = prompt("Please try again");
// }
// }