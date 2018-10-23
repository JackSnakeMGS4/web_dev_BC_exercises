var allLIs = document.querySelectorAll('li');

for (var i = 0; i < allLIs.length; i++) {
	allLIs[i].addEventListener("mouseover", function()
	{
		this.classList.add("selectGlow");
	});

	allLIs[i].addEventListener("mouseout", function()
	{
		this.classList.remove("selectGlow");
	});
	allLIs[i].addEventListener("click", function()
	{
		this.classList.toggle("taskComplete");
	});
}