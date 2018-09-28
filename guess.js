var secretNum = 5;

var playerGuess = prompt("Guess a answer number between 1-10");

if(Number(playerGuess) === secretNum)
{
	alert("Correct");
}
else if(Number(playerGuess) > secretNum)
{
	alert("Go Lower");
}
else if(Number(playerGuess) < secretNum)
{
	alert("Go higher");
}