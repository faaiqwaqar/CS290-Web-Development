/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name:
 * Email:
 */

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000;

var twitData = require('./twitData');
console.log("== twitData", twitData);

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/',function(req, res, next){
  res.status(200).render('twitBody', {"twits": twitData, "display": true});
});

app.get('/twits/:n', function (req, res, next) {
    var number = req.params.n;
    if(twitData[number]){
      console.log("== twitSpec", twitData[number]);
      var twitArr = [twitData[number]];
      res.status(200).render('twitBody',{"twits":twitArr, "display":false});
    }
    else{
      res.status(404).render('404Body');
    }
});

app.get('*', function (req, res) {
  // res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
  res.status(404).render('404Body');
});

app.listen(port, function (err) {
  if(err){
    throw err;
  }
  console.log("== Server is listening on port", port);
});
