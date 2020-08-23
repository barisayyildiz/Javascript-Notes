if("geolocation" in  navigator)
{
	//fonksiyonu parametre olarak yollamamızın nedeni, bunun bir callback fonksiyonu olması
	//async işlem...
	navigator.geolocation.getCurrentPosition(position => {
		console.log(position.coords.latitude, position.coords.longitude);
	})
}