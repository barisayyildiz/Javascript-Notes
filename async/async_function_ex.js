function delay(time)
{
	return new Promise((resolve, reject) => {

		setTimeout(resolve, time);

	});
}

async function main(num)
{
	if(num > 0)
	{
		await delay(1000);
		console.log("calling another function");
		main(num-1);
		message();
	}

}

function message()
{
	console.log("hello");
}


main(5);