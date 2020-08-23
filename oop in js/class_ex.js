/*const Vector = function(x,y){
	this.x = x;
	this.y = y;
};


Vector.prototype.plus = function(vector)
{
	console.log(this.x + vector.x, this.y + vector.y);
}

Vector.prototype.minus = function(vector)
{
	console.log(this.x - vector.x, this.y - vector.y);
}

Vector.prototype.length = function()
{
	let result = Math.sqrt(this.x**2 + this.y**2);
	console.log(result);
}

let v1 = new Vector(1,2);
let v2 = new Vector(2,3);

v1.minus(v2);*/

class Vector
{
	constructor(x,y)
	{
		this.x = x;
		this.y = y;
	}
	plus(vector)
	{
		console.log(this.x + vector.x, this.y + vector.y);
	}
	minus(vector)
	{
		console.log(this.x - vector.x, this.y - vector.y);
	}
	length()
	{
		let result = Math.sqrt(this.x**2 + this.y**2);
		console.log(result);
	}
}

let v1 = new Vector(1,2);
let v2 = new Vector(2,3);

v1.plus(v2);