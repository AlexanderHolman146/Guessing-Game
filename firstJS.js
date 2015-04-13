var guesses = [];

var guessCounter = 0

var guessLimit = 5

function calcAnswer(){
	return answer = Math.round(Math.random() * 100);
}

$(document).ready(function(){
//var answer = Math.round(Math.random() * 100);

calcAnswer();

function resetGameFunc(){
	guessCounter = 0;
	guesses = [];
	calcAnswer();
	alert("The game has been reset!")
}

	$('input').on("click",function(){
		$(this).val("");
		});

	$('#getAnswer').on("click",function(){
		$("#exclamation").text("The answer is " + answer+ "! Try playing again!")
	})


	$('#newgame').on("click",function(){
		var resetGame = false;
		resetGame = confirm("Are you sure you want to reset the game?")
		if (resetGame){
			resetGameFunc();
		}


	})	
	$('#submit').on("click",function(){
		var ansGuesses = false;
		for(var i=0;i<guesses.length;i++){
			if($('#guess_input').val()===guesses[i]){
				ansGuesses = true;
			}
		}	

		if(isNaN($('#guess_input').val()) || $('#guess_input').val()>100 || $('#guess_input').val()<0){
			alert("That's not an acceptable number.  Please input a number between 1-100!")
		}

		else if(ansGuesses){
			alert("You have already guessed this number! Try another guess!")
		}

		else{		
			if(Number($('#guess_input').val()) === answer){
				$('#exclamation').text("Holy Shit! You did it! Congratulations.  The game is automatically resetting!");
				$('#exclamation').append('<p class="click-me" onclick="onImageClicked(this)"><img src="test.jpg" border="0" width="500" height="159"></p>');
				resetGameFunc();
			}

			else{
				if((guessCounter) == (guessLimit-1)){
					alert("You're out of guesses! Restart the game");
					resetGameFunc();
				}
				else{
					guesses.push($('#guess_input').val());
					guessCounter++;
					$("#guessOuput").text("Good Guess! Try again!");
					$('#numGuessesOutput').text("You have "+(guessLimit-guessCounter)+" guesses left!");
					$('#whichGuesses').text("You have gusses the following numbers: "+guesses);
					if($('#guess_input').val()>answer){
						$('#hotOutput').text("You're guess is too high")
					}
					else{
						$('#hotOutput').text("You're guess is too low")
					}
				}
			}
		}
	})	

	$("#hint").on("click",function(){
		if(answer%2===0){
			alert("The answer is an even number");
		}
		else{
			alert("The answer is an odd number!");
		}
	})
})





























