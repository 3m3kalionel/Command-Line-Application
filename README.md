# Command-Line-Application

A Simple CLI that consumes openweathermap api

To Use the application type node app2.js [cityname] eg node app.js lagos

To enter multiple cities, follow the same procedure with spaces in-between the cities eg node app.js paris london lagos

follow the same procedure if u want to include the country name in the query, add a comma between the cityname and country iso code like this
	node app.js paris,fr with no space in-between

for simultaneous city/country queries run node app.js city1,city1countryISOcode city2countryISOCODE like this-
	node app.js lagos,ng paris,fr
