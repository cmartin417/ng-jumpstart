var path = require('path');

var clientDir = path.join(process.cwd(), 'public');
var viewDir = path.join(clientDir, 'views');

exports.index = function (req, res) {
	res.sendfile(path.join(clientDir, 'index.html'));
};

exports.views = function (req, res) {
	res.sendfile(path.join(viewDir, req.params.name + '.html'));
};