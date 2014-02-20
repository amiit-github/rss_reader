var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


// define model =================
	var FeedSchema = new Schema({
		title : String,
		content: String,
		pubDate: String
	});

	mongoose.model('Feed', FeedSchema);