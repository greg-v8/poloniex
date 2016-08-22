// greg-v8/polo/trollbox.js 0.1.0
// purpose: Connects to the Poloniex push trollbox API with Autobahn.
//

var autobahn = require('autobahn');
var connection = new autobahn.Connection({
  url: "wss://api.poloniex.com",
  realm: "realm1"
});

var express = require('express');
var app = express();

var trollboxEventString = '';

connection.onopen = function (session) {
  function trollboxEvent (args) {
    //format: type, messageNumber, username, message, reputation
    /*
    console.log('| USERNAME [rep.] : ' + args[2] + ' [' + args[4] + ']');
    console.log('| MESSAGE         : ' + args[3]);
    console.log('-------------------');
    */
    trollboxEventString += '| USERNAME [rep.] : ' + args[2] + ' [' + args[4] + ']\n' + '| MESSAGE         : ' + args[3] + '\n' + '-------------------\n';
  }
  session.subscribe('trollbox', trollboxEvent);

  app.use(function (req, res, next) {
    res.end(trollboxEventString);
    next();
  });
  app.listen(8080);
};
connection.open();
