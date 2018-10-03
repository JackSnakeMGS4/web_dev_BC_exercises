var todos = [];
setTimeout(function()
{
	var input = prompt("What will you do?");

	while(input !== "quit")
	{
		if(input === "list")
		{
			console.log(todos);
		}
		else if(input === "new")
		{
			let todoToAdd = prompt("What are you adding?");
			todos.push(todoToAdd);
		}
		input = prompt("What will you do?");
	}
	console.log("Quiting App");
}, 500);