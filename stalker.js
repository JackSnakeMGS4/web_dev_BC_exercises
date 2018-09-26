var button, fName, lName, age;

window.onload = function()
{
	fName = prompt("What's your first name?");
	lName = prompt("Last name?");
	age = prompt("Age?");

	alert(fName + " " + lName + " is your name. \n" + age + " is your age.");

	button = document.getElementById("rerunBtn");
	button.onclick = function()
	{
		window.location.reload();

	}
}