let database = [
	{title : "index-1", description : "description-1"},
	{title : "index-2", description : "description-2"}
]

function getPost()
{
	setTimeout(() => {
		for(let i=0; i<database.length; i++)
			console.log(database[i].title + " : " + database[i].description);
	}, 1000);
}


function createPost(data)
{
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			database.push(data);

			//call the function, just like the callback
			resolve();
		}, 2000);
	})
}

createPost({title : "index-3", description : "description-3"})
.then(getPost)
.catch(() => console.log("error!!"));