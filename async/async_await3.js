async function draw()
{
	for(let i=0; i<10; i++)
	{
		await delay(200);
		console.log(i);
	}
}

function delay(time)
{
	return new Promise((resolve, reject) => {
		setTimeout(resolve, time);
	})
}

draw();
