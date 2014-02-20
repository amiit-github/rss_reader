'use strict';

var feeds = require('../controllers/feeds');

module.exports = function(app) {
	app.get('/api/feeds', feeds.all);
}