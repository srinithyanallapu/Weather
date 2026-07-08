function weatherinput(){
    let city=document.getElementById("city");
    getdata(city.value);
}
async function getdata(city) {
    const url = `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd29da10e32msh4ad34e3d89023a1p138cfcjsn94bbf1e1bd12',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    displaydata(result.main.temp,city);
	// console.log("Temperature in " + city + ": " + result.main.temp);
} catch (error) {
	console.error(error);
}
    
}
function displaydata(temp,city){
    let tempElement=document.getElementById("resultdata");
    tempElement.innerHTML = `<h3>Temperature in ${city}: ${temp}°C</h3>`;
    // temp.innerHTML = `Temperature: ${city}`;

}