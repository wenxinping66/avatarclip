var express = require('express');
var path = require('path');


var app = express();

app.use(express.static(path.join(__dirname, 'public')));


app.listen('3030', function() {
    console.log('start on port 3030')
});
