var p1Btn = document.getElementById('p1');
var p2Btn = document.getElementById('p2');
var resetBtn = document.getElementById('reset');
var p1ScoreSpan = document.querySelector('#p1Score');
var p2ScoreSpan = document.querySelector('#p2Score');
var numInput = document.querySelector("input[type='number']");
var winScoreSpan = document.querySelector('p span');

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Btn.addEventListener("click", function()
{
	if(!gameOver)
	{
		p1Score++;
		if(p1Score >= winningScore)
		{
			p1ScoreSpan.classList.add("winner");
			gameOver = true;
		}
		p1ScoreSpan.textContent = p1Score;
	}
});

p2Btn.addEventListener("click", function()
{
	if(!gameOver)
	{
		p2Score++;
		if(p2Score >= winningScore)
		{
			p2ScoreSpan.classList.add("winner");
			gameOver = true;
		}
		p2ScoreSpan.textContent = p2Score;
	}
});

resetBtn.addEventListener("click", function() {
	reset();
})

function reset()
{
	p1Score = 0;
	p2Score = 0;

	p1ScoreSpan.textContent = p1Score;	
	p2ScoreSpan.textContent = p2Score;

	p1ScoreSpan.classList.remove("winner");
	p2ScoreSpan.classList.remove("winner");
	gameOver = false;
}

numInput.addEventListener("change", function()
{
	winScoreSpan.textContent = this.value;
	winningScore = Number(this.value);
	reset();
})