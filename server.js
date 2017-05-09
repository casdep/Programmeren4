/**
 * Created by Cas on 5/4/2017.
 */
/**
 * Created by Cas on 5/2/2017.
 */
var express = require('express');
var config = require('./config.json');
var express = require('express');
var path = require('path');

var router = express.Router();
var app = express();

app.set('PORT', config.webPort);

app.get('/', function(request, response) {
    response.send('Hello Avans!');
})

app.get('/about', function(request, response) {
    response.send('Written by <Cas>');
})

app.post('/', function(request, response) {
    response.send('Hello Avans, POST request received!');
})

app.put('/', function(request, response) {
    response.send('Hello Avans, PUT request received!');
})

var port = process.env.PORT || app.get('PORT');

app.listen(port, function() {
    console.log('The magic happens at http://localhost:' + port);
})

router.get('*', function(request, response) {
    response.status(200);
    response.json({
        "description": "Recipes REST server API version 1 is no longer supported. Please use API version 2."
    });
});

module.exports = router;


