const http = require('http');
const api = require('./api');

function getWeather(city, country, temp) {
	const message = `The current weather in ${city}, ${country} is ${temp} *K`;
	console.log(message);
}

function printError(error) {
	console.log(error.message);
}

function get(query) {
	const request = http.get(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api.key}`, 
	response => {
		let body = '';

		response.on('data', data => {
			body += data.toString();
		});	//end response.on data

		response.on('end', () => {
			const profile = JSON.parse(body);
			getWeather(profile.name, profile.sys.country, profile.main.temp);
			console.log(``);
		});

	} //end request

	);
}

module.exports.get = get;