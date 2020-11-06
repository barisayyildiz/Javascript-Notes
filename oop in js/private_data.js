let obj = function()
{
	let _prop1 = "starman";
	return {
		prop2: 1981,
		get asd()
		{
			return _prop1;
		},
		set asd(_val)
		{
			_prop1 = _val;
		}
	}
}


let o1 = obj();

console.log(o1);
