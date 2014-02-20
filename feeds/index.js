var express = require('express'),
	fs = require('fs');
var app = express();
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/feeds');

app.use(express.static('./public'));
// Bootstrap models
require('./models/feed');
//Bootstrap routes
require('./routes/feeds')(app);

// //app.get('/', home.index);

// // url/google.com
// app.get('/url/:urlstring', function(req, res) {
// 	res.send("Url recieved is : "+ req.params['urlstring']);
// });

// //url?urlstring=google.com
// app.get('/url', function(req, res) {
// 	res.send("Url recieved is : "+ req.query.urlstring);
// });

// app.get('/', function(req, res) {
// 	 res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
// });


app.listen(3000);



// Expose app
exports = module.exports = app;
