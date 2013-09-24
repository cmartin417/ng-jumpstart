var express = require('express');
var http = require('http');
var path = require('path');
var routes = require('./src/routes/routes.js');
var api = require('./src/routes/api.js');

var app = module.exports = express();

app.configure(function () {
	app.set('port', process.env.PORT || 3000);
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.static(path.join(__dirname, 'public')));
	app.use(app.router);
});

if (app.get('env') === 'development') {
	app.use(express.errorHandler());
}

if (app.get('env') === 'production') {
  // TODO
}

// api routes
app.get('/api/name', api.name);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

app.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});