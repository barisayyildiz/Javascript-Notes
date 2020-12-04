function talk()
{
	console.log(this.sound)
}

let animal = {
	talk : talk
}

let cat = {
	sound : "miyav"
}

Object.setPrototypeOf(cat, animal)

animal.talk()	// undefined
cat.talk()		// miyav
