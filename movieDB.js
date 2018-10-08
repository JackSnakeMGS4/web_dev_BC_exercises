var moviesObj = [
				{title: "Black Panther", rating: 5, hasWatched: true},

				{title: "Christopher Robin", rating: 5, hasWatched: false},

				{title: "Avengers: Infinity War", rating: 5, hasWatched: true},

				{title: "Altered Carbon", rating: 5, hasWatched: true},

				{title: "Overboard", rating: 5, hasWatched: true}
				];

function printMovies(movies)
{
	for(var i=0;i<movies.length;i++)
	{
		if(movies[i].hasWatched)
		{
			console.log("You have seen \"" + movies[i].title + "\" - " 
						+ movies[i].rating + " stars");
		}
		else
		{
			console.log("You have not seen \"" + movies[i].title + "\" - " 
						+ movies[i].rating + " stars");
		}
	}
}