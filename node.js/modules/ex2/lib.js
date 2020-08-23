/*
let name = "barisayyildiz";
let x = 3;

function selamla()
{
	console.log("hello");
}

exports.name = name;
exports.num = x;
exports.hi = selamla;
*/

/*

function Kisi(name, surname)
{
	this.name = name;
	this.surname = surname;

	this.introduce = () => console.log(this.name, this.surname);
}

module.exports = Kisi;
module.exports = "yello";

*/



exports.num = 12;

module.exports.selamla = () => console.log("yello");

console.log(module);
console.log(exports);
