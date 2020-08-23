class Mammal
{
	constructor(sound)
	{
		this.sound = sound;
	}

	talk()
	{
		return this.sound;
	}
}

class Dog extends Mammal
{
	constructor()
	{
		super("hav");
	}
}

let mydoggie = new Dog();
let mammal = new Mammal("qwdasds");

console.log(mydoggie);
console.log(mammal);

console.log(Dog.prototype);
console.log(mydoggie.__proto__ == Dog.prototype);

let x = Mammal.prototype.isPrototypeOf(Dog.prototype);
console.log("x : ", x);
