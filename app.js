// Numbers
	var randomNumber = Math.floor(Math.random() * (1 - 100) + 1);
	var $userGuess = +$('#userGuess').val();
	var difference = Math.abs(userGuess-randomNumber);
	var numGuesses = 0;

// Elements
	var $feedback = $('#feedback');
	var $guessList = $('#guessList');
	var $guessButton = $('#guessButton');
	var $count = $('#count');
	var $newGame = $('.new');

// New Game
var newGame = function (newGame) {
	numGuesses = 0;
	$feedback.text('Make your guess!');
	$('#userGuess').empty();
	$guessList.children.remove();
	$count.value(0);
};

$(document).ready(function(){

	newGame();

	// Game Play&Feedback
	$guessButton.click(function (guessNumber) {

		numGuesses++ ;
		$count.text(numGuesses);

			if (userGuess < 1 || userGuess > 100 || isNan(userGuess)) {

				alert("Oops! Please choose a number between 1 and 100!");

			} else {

				if ($userGuess === randomNumber) {
					$feedback.text('You got it!');
					$guessList.append($('<li>'+$userGuess+ '</li>'));
				} else if (difference < 10) {
					$feedback.text('Hot hot hot!');
					$guessList.append($('<li>'+$userGuess+ '</li>'));
				} else if (difference < 25) {
					$feedback.text('Getting closer!');
					$guessList.append($('<li>'+$userGuess+ '</li>'));
				} else if (difference < 50) {
					$feedback.text('Pretty lukewarm.');
					$guessList.append($('<li>'+$userGuess+ '</li>'));
				} else if (difference < 85) {
					$feedback.text('Yikes. Chilly!');
					$guessList.append($('<li>'+$userGuess+ '</li>'));
				} else {
					$feedback.text('Absolutely freezing.');
					$guessList.append($('<li>'+$userGuess+ '</li>'));
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

$newGame.click(newGame());
