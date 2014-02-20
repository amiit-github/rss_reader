'use strict';

var feeds = require('../controllers/feeds');

module.exports = function(app) {
	app.get('/api/feeds', feeds.all);
	app.get('/api/feedUrl/:feedUrl', feeds.parse);
}