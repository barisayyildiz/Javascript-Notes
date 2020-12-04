let Yapici = function()
{
	Yapici.NUMBER = 100;
	Yapici.statikFonksiyon = function()
	{
		console.log("ben bir statik fonksiyonum...", Yapici.NUMBER)
	}

	this.x = 2;
	this.y = 6.7;
}

Yapici.prototype.degisken = 67;

Yapici.prototype.fonksiyon1 = function()
{
	return this.x * this.y;
}

let obj1 = new Yapici();
console.log(obj1);


// =============== class keywordü ile =============== //

class Yapici
{
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
	}

	fonksiyon1()
	{
		return this.x * this.y;
	}

	static NUMBER = 100;

	static statikFonksiyon()
	{
		console.log("ben bir statik fonksiyonum...", Yapici.NUMBER)
	}
}

let obj1 = new Yapici(3,4);
console.log(obj1);


