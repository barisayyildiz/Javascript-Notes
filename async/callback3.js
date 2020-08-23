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
