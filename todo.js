var todos = [];
setTimeout(function()
{
	var input = prompt("What will you do?");

	function list()
	{
		console.log("**********");
		todos.forEach(function(todo, index)
		{
			console.log(index + ": " + todo);
		});
		console.log("**********");
	}

	function add()
	{
		let todoToAdd = prompt("What are you adding?");
		todos.push(todoToAdd);
	}

	function deleteTodo()
	{
		let index = prompt("Delete index: ex. 0");
		todos.splice(index, 1);
	}

	while(input !== "quit")
	{
		if(input === "list")
		{
			list();
		}
		else if(input === "new")
		{
			add();
		}
		else if(input === "delete")
		{
			deleteTodo();
		}
		input = prompt("What will you do?");
	}
	console.log("Quiting App");
}, 500);

	