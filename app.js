// New Game
var newGame = function newGame() {
	numGuesses = 0;
	$feedback.text('Make your guess!');
	$guessList.children.remove();
	$count.text(0);
};

$(document).ready(function(){

	// Numbers
	var randomNumber = Math.floor(Math.random() * (1 - 100) + 1);
	var $userGuess = +$('.userGuess').val();
	var difference = Math.abs(userGuess-randomNumber);
	var numGuesses = 0;

	// Elements
	var $feedback = $('#feedback');
	var $guessList = $('#guessList');
	var $guessButton = $('#guessButton');
	var $count = $('#count');
	var $newGame = $('.new');

	// Game Play&Feedback
	$guessButton.submit(function guessNumber() {
			if (userGuess < 1 || userGuess > 100 || isNan(userGuess)) {

				alert("Oops! Please choose a number between 1 and 100!");

			} else {

				numGuesses++;
				$count.text(numGuesses);
				$guessList.append($('<li>'+$userGuess+'</li>'));

				if ($userGuess === randomNumber) {
					$feedback.text('You got it!');
				} else if (difference < 10) {
					$feedback.text('Hot hot hot!');
				} else if (difference < 25) {
					$feedback.text('Getting closer!');
				} else if (difference < 50) {
					$feedback.text('Pretty lukewarm.');
				} else if (difference < 85) {
					$feedback.text('Yikes. Chilly!');
				} else {
					$feedback.text('Absolutely freezing.');
				}
			}
	});

	// Game explanation display
	$(".what").click(function(){
		$(".overlay").fadeIn(1000);
	});
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});

});

