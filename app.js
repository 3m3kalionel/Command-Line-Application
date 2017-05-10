const weather = require('./weather.js')

const users = process.argv.slice(2);
users.forEach(weather.get);