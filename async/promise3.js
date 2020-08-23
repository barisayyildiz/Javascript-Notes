let url = "https://api.thecatapi.com/v1/images/search";


for(let i=0; i<10; i++)
{
	fetch(url)
	.then(response => 
	{
		return response.json();
	})
	.then(data => 
	{
		console.log(data[0].id);
	})
	.catch((err) => 
	{
		console.log(err);
	})
}
