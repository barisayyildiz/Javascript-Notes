let cat = {
	tur : "qwewe"
}

let mycat = {
	age : 2
}

Object.setPrototypeOf(mycat, cat)

//.prototype yalnızca fonksiyonlarda bulunur ve bir objedir

console.log(mycat.__proto__ == cat) 						// true
console.log(cat.__proto__ == Object.prototype)	// true

/*---------------------------------------------------*/

let Dog = function(){}

Dog.prototype.bark = () => {console.log("hav hav")}

let mydog = new Dog();

mydog.bark()


// new keywoardü ile mydog.__proto__ objesi Dog.prototype ile tanımlandı!!!
console.log(typeof Dog.prototype)								// object
console.log(mydog.__proto__ == Dog.prototype)		// true
