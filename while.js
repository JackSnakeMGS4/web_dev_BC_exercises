function loopOne()
{
	var initNum = -10;
	while(initNum <= 19)
	{
		console.log(initNum);
		initNum++;
	}
}

function loopTwo()
{
	var initNum = 10;
	while(initNum <= 40)
	{
		if((initNum % 2) === 0)
		{
			console.log(initNum);
		}
		initNum++;
	}
}

function loopThree()
{
	var initNum = 300;
	while(initNum <= 333)
	{
		if((initNum % 2 !== 0))
		{
			console.log(initNum);
		}
		initNum++;
	}
}

function loopFour()
{
	var initNum = 5;
	while(initNum <= 50)
	{
		if((initNum%5 === 0) && (initNum%3 ===0))
		{
			console.log(initNum);
		}
		initNum++;
	}
}