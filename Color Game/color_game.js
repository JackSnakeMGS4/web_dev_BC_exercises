var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var colorToWin = chooseWinningColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = colorToWin;

for(var i = 0; i < squares.length; i++)
{
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function()
	{
		var chosenColor = this.style.backgroundColor;

		if(chosenColor === colorToWin)
		{
			messageDisplay.textContent = "Hell Yes!";
			changeColors(chosenColor);
			h1.style.backgroundColor = chosenColor;
		}
		else
		{
			this.style.backgroundImage = "repeating-linear-gradient(15deg,"
			+ " #252525, #303030 5px, black 10px, black 5px)";
			messageDisplay.textContent = "Guess Again!";
		}
	});
}

function changeColors(color)
{
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
		squares[i].style.backgroundImage = null;
	}
}

function chooseWinningColor()
{
	var randColor = Math.floor(Math.random() * colors.length);
	return colors[randColor];
}

function generateRandomColors(num)
{
	var arr = [];

	for(var i = 0; i < num; i++)
	{
		arr.push(randColor());
	}

	return arr;
}

function randColor()
{
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}