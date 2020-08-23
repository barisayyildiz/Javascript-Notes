var Person = 
{
	init: function (name, surname)
	{
		this.name = name;
		this.surname = surname;
	},

	hello : () => console.log("Hello World")
};

/*
Prototype-based programming uses generalized objects, 
which can then be cloned and extended. Using fruit as an example, 
a "fruit" object would represent the properties and functionality 
of fruit in general. A "banana" object would be cloned from 
the "fruit" object and general properties specific to bananas 
would be appended. Each individual "banana" object would be 
cloned from the generic "banana" object. 

Compare to the class-based paradigm, where a "fruit" class would be 
extended by a "banana" class.

We don't need classes to make lots of similar objects… 
Objects inherit from objects. What could be more object oriented than that?
*/


//Creates a new Object with the prototype set to a certain object
let baris = Object.create(Person);
baris.init("baris", "ayyildiz");


console.log(baris.name, baris.surname);
baris.hello();


console.log(baris);
console.log("-------------");
console.log(Person);