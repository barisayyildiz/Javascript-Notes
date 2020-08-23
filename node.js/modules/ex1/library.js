function Color(name, code)
{
	this.name = name;
	this.code = code;
}


let red = new Color("red", "#a8323e");
let green = new Color("green", "#36a832");
let blue = new Color("blue", "#3432a8");

let allColors = [red, green, blue];

exports.sysColors = allColors;
