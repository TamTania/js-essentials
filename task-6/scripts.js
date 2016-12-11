var randomNumber = parseInt(Math.random() * 100);


while (inputNumber !== randomNumber) {
	var inputNumber = prompt("Guess the number. type it here:");
	if (inputNumber !== null) {
		if (inputNumber > randomNumber) {
		alert("Our number is lower, try again.");
		}
		else if (inputNumber < randomNumber)
			alert("Our number is higher, try again.");
		else {
			alert("You are right, the number is " + randomNumber);
			break;
		}
	}
	else 
		break;
};




