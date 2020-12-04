let Point = function(x, y)
{
	this.x = x
	this.y = y

}

Point.prototype.position = function()
{
	console.log(this.x, this.y)
}


let Circle = function(x,y,radius)
{
	Point.call(this, x, y)

	this.radius = radius

}

Circle.prototype = Object.create(Point.prototype)


Circle.prototype.area = function()
{
	return 3.14 * this.radius * this.radius
}

Circle.prototype.constructor = Circle




let p1 = new Point(0,0)
let p2 = new Point(3,4)


let c1 = new Circle(0,0,6)
console.log(c1.area())
