function talk()
{
	console.log(this.sound)
}


let obj = {
	sound : "eyyooooo!!!"
}

// bind is for future
let newFunc = talk.bind(obj);
newFunc(); // eyyooooo!!!
talk(); // undefined


// call and apply is for immediate calls
talk.call(obj);
talk.apply(obj);

