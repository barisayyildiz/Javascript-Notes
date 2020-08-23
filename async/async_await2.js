let url = "https://api.thecatapi.com/v1/images/search";

function setup()
{
	getData()
	.then((url) => {
	//console.log(url)

	let image = document.createElement("img");
	image.src = url;
	image.style.border = "1px solid black";
	image.style.width = "500px";

	document.body.appendChild(image);

	})
	.catch(err => console.log(err));
}


async function getData()
{
	let response = await fetch(url);
	let json = await response.json();
	return json[0].url;
}

setup();


/*
promise4.js
----------------



function setup()
{
	delayES8(1000)
	.then(() => console.log("hello"))
	.catch((err) => console.log(err));
}


async function delayES8(time)
{
	await delay(time);

	return;
}


function delay(time)
{
	return new Promise((resolve, reject) => {

		if(!(typeof(time) === "number"))
		{
			reject("Please enter a number...");
		}else
		{
			setTimeout(resolve, time);
		}
	})
}



setup();


/*function delay(time)
{
	return new Promise((resolve, reject) => {

		if(!(typeof(time) === "number"))
		{
			reject("Please enter a number...");
		}else
		{
			setTimeout(resolve, time);
		}
	})
}*/
