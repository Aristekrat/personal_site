
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

// All Environments
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
// Dev & Prod specific settings
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
    app.use(express.static(path.join(__dirname, '/public')));
} else {
    app.use(express.compress());
    app.use(express.static(path.join(__dirname, '/public', {maxAge: 86400000})));
}

// Routes
app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
