const short = require('short-uuid');



var main = {};
main.login = (i, j) => {
	console.log('login');
	return short.generate();
}


module.exports = main;


