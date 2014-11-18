// this is the controoler that the routes 
//config file is gonna call methods from.
//Exports is going to be an inmmediate function that
//returns a js object with functions corresponsing to keys

//first we require mongoose so that we can access the model stuff

//var mongoose = require('mongoose');
//this is the model that you are requiring 
//typically 1-1 relationship with model
//var Friend = mongoose.model('Friend');

//start Exports

module.exports = (function() {
	return{
		index: function(req,res) {res.render('index')},
		dashboard: function(req,res) {res.render('dashboard')},
		history: function(req,res) {res.render ('history')},
		userinput: function(req,res) {
			console.log(req.body)
			res.render('display', {name: req.body.name})
		}
	} 
}());