var express = require('express');
var app = express();

app.use(express.static('media/'));
app.use(express.static('media/sounds/'));
app.use(express.static(__dirname));

app.engine('.html', require('ejs').renderFile);
app.set('views', '');

app.get('/', function(req, res, next) {
	
	res.render('index.html');

})

app.listen(80);