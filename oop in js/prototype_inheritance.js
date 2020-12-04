let Student = function(name, age, gender)
{
	this.name = name;
	this.age = age;
	this.gender = gender;
	this.introduce = () => {

		console.log("My name is : ", this.name)

	}

}


let Teacher = function(name, age, gender, salary)
{
	Student.call(this, name, age, gender)

	this.salary = salary
}

let tch1 = new Teacher("ozlem", 46, "F", 6000)
console.log(tch1);

tch1.introduce()
