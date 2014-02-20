'use strict';

var mongoose = require('mongoose'),
	Feed = mongoose.model('Feed'); 


//return all feeds in json format
exports.all = function (req,res) {
	res.send("Hii");
	Feed.find(function (err, feeds) {
		if(err) res.send(err);

		res.json(feeds); 
	});
}