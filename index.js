/* */

//
//
var config = {
        server: {
            port: process.env.PORT || 3000
        }
    },
    express = require('express'),
    multer = require('multer'),
    bodyParser = require('body-parser'),
    jade = require('jade'),
    mongoose = require('mongoose'),
    app = express(),
    server;

//
//
app.use(multer({dest:'./uploads'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', './views');
app.set('view engine', 'jade');

//
//
app.use(express.static('./public'));

//
//
app.get('/', function(req, res) {
    res.send('<h1>Specter</h1><h2>Just A Wiki Platform</h2>');
});

//
//
app.use(function(req, res) {
    res.redirect('/');
});
app.use(function(err, req, res, next) {
    console.log(err);
    res.redirect('/');
});

// 
//
server = app.listen(config.server.port, function() {
    console.log('Listening at http://%s:%s', 
        server.address().address,
        server.address().port
    );
});
