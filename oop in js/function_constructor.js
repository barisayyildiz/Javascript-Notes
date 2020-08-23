var Person = function(name, surname, yearofBirth)
{
	this.name = name;
	this.surname = surname; 
	this.yearofBirth = yearofBirth;

	/*
	this.introduce = function(){
		console.log(this.name, this.surname, this.yearofBirth);
	}
	*/
}

//MIND THE DIFFERENCE


//THIS ADDS THE FUNCTION TO PERSON PROTOTYPE
Person.prototype.introduce = function()
{
	console.log(this.name, this.surname, this.yearofBirth);
}


var baris = new Person("baris", "ayyildiz", 1999);

baris.introduce();

console.log(baris);