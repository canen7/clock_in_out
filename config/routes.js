// Routes fill will handle all incoming requests and point to tghe correct view 
//(only for the index landing page if you're using angular or controller)
var contractors = require('../server/controllers/contractors.js')
var admins = require('../server/controllers/admins.js')


module.exports = function Routes(app) {
	app.get('/', function(req,res) { contractors.index(req,res) });
	app.get('/index', function(req,res) { contractors.index(req,res) });
	app.get('/dashboard', function(req,res) { contractors.dashboard(req,res) });
	app.get('/history', function(req,res) { contractors.history(req,res) });
	
	app.get('/admin/dashboard', function(req,res){
		friends.sample2(req,res);
	})
	app.get('/admin/history', function(req,res){
		friends.userinput(req,res);
	})
	app.get('/settings', function(req,res) {
		friends.userinput(req,res);
	})
	app.get('/user/new', function(req,res) {

	})
	app.post('user/new'), function(req,res) { 

	}
}