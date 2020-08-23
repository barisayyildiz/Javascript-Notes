/*
let cat = {breed : "munchkin"};

let myCat = {name : "Fluffykins"};

Object.setPrototypeOf(myCat, cat);

cat.tailLength = 15;

console.log(myCat.__proto__);
*/

function addition(n1, n2, n3)
{
	return n1+n2+n3;
}

function Dog() { }

Dog.prototype.bark = () => 
{
	console.log("hav hav");
}

console.log(Dog.prototype);


/*

prototype property only exists on funcitons !!!!!!!!!!!1

addition				addition.prototype 	=>		bunun altında __proto__ var => Object.prototype'a eşit

(function)			object


*/