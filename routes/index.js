// Get all of our friend data
var data = require('../data.json');

exports.view = function(request, response){
	console.log(data);
	//input data for 'index'
	response.render('index',data);
};