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

delay(1000)
.then(() => console.log("hello"))
.catch((err) => console.log(err));