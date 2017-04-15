
// call the packages we need



var express= require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');	// parse the json data
var fs = require('fs');

var mysql = require('mysql');				// call mysql
var AST = require('node-sqlparser');
var unit;		// call node sql parser
// fix cors errors
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};
app.use(allowCrossDomain);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR API
// =============================================================================
var router = express.Router();// get an instance of the express Router

app.use(express.static('/public'));

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next();
});


// display reservation
router.get('/table', function(req, res) {
	
	res.send(results);
});








router.route('/reservation')

// create a cloze card (accessed at POST http://localhost:8080/api/cloze)
    .post(function(req, res) {
          

       res.json({ message: 'Reservation created!' });
            
    });



app.use(express.static('./public'));

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);



