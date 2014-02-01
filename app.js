var express = require('express');
var http = require('http');
var path = require('path');
var config = require('config');
var log = require('lib/log')(module);

var app = express();

app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

http.createServer(app).listen(config.get('port'), function() {
  log.info('Express server listening on port ' + config.get('port'));
});

app.use(express.favicon());

app.use(express.logger(
        (app.get('env') == 'development') ? 'dev' : 'default'
));

app.use(express.bodyParser());

app.use(express.cookieParser());

app.use(app.router);

require('routes')(app);

app.use(express.static(path.join(__dirname, 'public')));

app.use(function (err, req, res, next) {
    if (typeof err == 'number') {
        res.send(err);
    } else {
        if (app.get('env') == 'development') {
            var errorHandler = express.errorHandler();
            errorHandler(err, req, res, next);
        } else {
            res.send(500);
        }
    }
});