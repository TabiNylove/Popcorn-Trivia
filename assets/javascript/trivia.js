// VARIABLES
var time = 25; // amount of seconds user has to answer questions
var timeInterval; // the interval that calls on 'timer' function every second
var questions = $('.questions'); // the <div> holding all questions in html, (hide or show)
var correctAnswers = $('.correct'); // selects all correct answers in html
var numCorrect = 0; // tally of all correct answers
//===============================================================
// DECLARE FIRST

// hide the questions until timer starts
questions.hide();

//===============================================================
// START

// when 'start' button is clicked...
$('.btn').on("click", function start() {
	// ...start the timer
	timeInterval = setInterval(timer, 1000);
	// ...show the questions
	questions.show();
})

// timer function:
function timer() {
	// subtract 1 for every second
	time--;
	// replace start button with timer in html
	$('#start').html("<p>Time:  " + time + "</p>");
	// if the timer reaches zero, call function 'mainTally'
	if (time === 0) {
		mainTally();
		clearInterval(timeInterval);
	}
}
//===============================================================
// TALLY SCORE

//main tally function: 
function mainTally() {
	// for however many questions there are...
	for (var i = 0; i < correctAnswers.length; i++) {
		// ...check if the correct answer is checked
		if (correctAnswers[i].checked === true) {
			//...if it is, add 1 to 'numCorrect'
				numCorrect++;

				console.log(correctAnswers[i].checked);
		} 
	}
	// alert 
	alert("You got " + numCorrect + " question/s correct!");
}




