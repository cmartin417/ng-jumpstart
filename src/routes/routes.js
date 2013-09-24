var path = require('path');

exports.index = function (req, res) {
	res.sendfile(path.join(process.cwd(), 'public', 'index.html'));
};