var randomNumber = parseInt(Math.random() * 100);


while (inputNumber !== randomNumber) {
	var inputNumber = prompt("Guess the number from 0 to 100. Type it here:");
	if (inputNumber.search(/[0-9]/i) !== -1 && inputNumber !== null) {
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




