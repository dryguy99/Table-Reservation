// call the packages we need
var x = require("./object-generator.js");
var express= require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');	// parse the json data
var fs = require('fs');

var mysql = require('mysql');				// call mysql
var AST = require('node-sqlparser');
var reservationArray=[];
var waitListArray=[];

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


    .post(function(req, res) {
         //console.log(req.body.name)
//           console.log("")
// var name= (req.body.name);
// var phone= req.body.phone;
// var email=req.body.email;
// var id= req.body.id;

 //console.log(Json.parse(req.body).name)
      console.log(JSON.parse(req.body).name);
unit = new x(name,phone,email,id);
console.log(unit)
unit.reservation();

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




// // $(document).on("click", "#addResBtn", function() {


// // $("#nameInput").val() = this.table;
// // $("#numInput").val() = this.phone;
// // $("#mIlInput").val() = this.email;
// // $("#idInput").val() = this.id;


// // unit = new x.Table(this.table,this.phone,this.email,this.email);
// //     unit.reservation();



// })