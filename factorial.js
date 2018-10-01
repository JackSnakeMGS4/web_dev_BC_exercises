//will calculate the factorial of any num passed in
function factorial(x) {
	var numList = [];
	while(x > 0)
    {
		numList.push(x);
		x--;
	}
	
	var product = numList[0] * numList[1];
	for(var i = 2; i < numList.length; i++)
    {
		 product *= numList[i];
	}

	return product;
}