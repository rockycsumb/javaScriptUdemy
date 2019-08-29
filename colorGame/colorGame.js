var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numOfSquares = 3;
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";

	for(var i = 0; i < squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.background = colors[i];

		}
		else
		{
			squares[i].style.display = "none";
		}	
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numOfSquares = 6;
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
	
});

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numOfSquares);

	//pick a new random color from array
	pickedColor = pickColor();

	// change color display to match picked color
	colorDisplay.textContent = pickedColor;

	// change colors of squares
	changeColor(colors);

	for(var i = 0; i < squares.length; i++)
	{
	// add initial colors to squares
		squares[i].style.background = colors[i];
	}
	messageDisplay.textContent = "";
	resetButton.textContent = "New Game";
	h1.style.background = "steelblue";

});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++)
{
	// add initial colors to squares
	squares[i].style.background = colors[i];
	
	// add click listeners
	squares[i].addEventListener("click", function(){
		// compare colors of picked and square
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor)
		{
			messageDisplay.textContent = "Correct";
			changeColor(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?";

			
		}
		else
		{
			this.style.background ="#232323";
			messageDisplay.textContent = "Try Again";
			
		}
	});
}

function changeColor(color)
{
	//loop through all squares
	// change color to match given color
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	// make an array
	var arr = [];
	// add num random colors to array
	// return array

	for (var i = 0; i < num; i++) 
	{
		arr.push(randomColor());
	}

	return arr;
}

function randomColor()
{
	// pick a red from 0 -255
	var r = Math.floor(Math.random() * 256);
	// pick a green from 0 -255
	var g = Math.floor(Math.random() * 256);
	// pick a blue from 0 -255
	var b = Math.floor(Math.random() * 256);

	var rgbString = "rgb(" + r + ", " + g +", " + b + ")";

	return rgbString;
}