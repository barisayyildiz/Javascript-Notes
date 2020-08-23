
//PROMISES !!!!!!!!!!!!

let array = [5,7,4,3,9];


function firstAsyncFunction(array)
{
	return new Promise((resolve, reject) => {

		console.log("executing firstAsyncFunction...");

		resolve(array.sort());
	})
}



new Promise((resolve, reject) => {

		console.log("executing firstAsyncFunction...");

		// error handling...

		resolve(array.sort());
})
.then(data => data.slice(1))
.then(data => console.log(data));


/*

CALLBACKS!!!!!!!!

function hi()
{
	console.log("hello...");
}

function callBackTree(time, callback)
{
	setTimeout(callback, time);

}

callBackTree(2000, hi);

*/

/*
CALLBACKS!!!!!!!!!!!

function get(param, callback)
{
	console.log(param);
	let ogrenci = {name : "baris", num : "1901042252"};
	let ortalama = {gpa : 3.72}
	return callback(ogrenci, ortalama);
}


get('/home', (req, res) => {

	console.log(req);
})

*/
