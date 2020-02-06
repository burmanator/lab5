var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	var addFriend = {
		"name": request.query.name,
		"description": request.query.description,
		"imageURL":"http://lorempixel.com/400/400/people"
	}
	data.friends.push(addFriend);
	response.render('index', data);
	console.log("New Buddy!");
 }