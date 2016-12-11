init();

//function asks about starting the game
function init() {
	if (confirm("Do you want to play the game?")) {
		guessNumber();
	}
	else 
		console.log("Today you will not win the jackpot, but you could.");
};

//First round of guessing game
function guessNumber() {
	var randomNumber = parseInt(Math.random() * 5);
	console.log(randomNumber);
	var sum = 0; 		//counter for prize
	var n = 0;  		//counter for attempts
	while (n !== 3) {
		var inputNumber = prompt("Guess the number from 0 to 5. Type it here:");
		n++;
		if (inputNumber !== null) {
			if (inputNumber > randomNumber) {
			alert("Our number is lower, try again.");
			}
			else if (inputNumber < randomNumber)
				alert("Our number is higher, try again.");
			else {
				alert("You are right, the number is " + randomNumber);

	            if (n === 1) {
	                sum = sum + 10;
	            } 
	            else if (n === 2) {
	                sum = sum + 5;
	            } 
	            else if (n === 3) {
	                sum = sum + 2;
	            }
	         
        		console.log("You win " + sum + "$");

				if (confirm("Do you want to play the game?")) {
					guessNextNumber(sum);
				}	
				else 
					console.log("Thanks for the game! Your win is " + sum + "$." );
					break;
			}
		}
		else 
			break;
	}
	// console.log("Thanks for the game! Your win is " + sum + "$." );
	return sum;
}

//Second round of guessing game
function guessNextNumber(prize) {
	var randomNumber = parseInt(Math.random() * 10);
	console.log(randomNumber);
	var newSum = prize; 	//counter for prize
	var n = 0;   			//counter for attempts
	while (n !== 3) {
		var inputNumber = prompt("Guess the number from 0 to 10. Type it here:");
		n++;
		if (inputNumber !== null) {
			if (inputNumber > randomNumber) {
			alert("Our number is lower, try again.");
			}
			else if (inputNumber < randomNumber)
				alert("Our number is higher, try again.");
			else {
				alert("You are right, the number is " + randomNumber);

	            if (n === 1) {
	                newSum = newSum + 30; 
	            } 
	            else if (n === 2) {
	                newSum = newSum + 15;
	            } 
	            else if (n === 3) {
	                newSum = newSum + 6;
	            }
	         
        		console.log("You win " + newSum + "$");

				if (confirm("Do you want to play the game?")) {
					guessNextNumber(newSum);
				}	
				else 
					console.log("Thanks for the game! Your win is " + newSum + "$." );
					break;
			}
		}
		else 
			break;
	}
	return newSum;
}


