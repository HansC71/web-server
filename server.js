var express = require('express');
var app = express();
var PORT = process.env.PORT|| 3000;

var middleware = require('./middleware.js');


//app.use(middleware.requireAuthentication);
app.use(middleware.logger);
  
app.get('/test', function(req, res){
    res.send ('Hello Express!!!');
    
});



// about Page

app.get('/about', middleware.requireAuthentication,
    function (req, res) {
        res.send('Hello about!');

    });

app.use(express.static(__dirname + '/public'));
console.log(__dirname);
app.listen(PORT, function(){
 console.log('Express Server gestartet an Port ' + PORT)   
});
