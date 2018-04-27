// Dependencies of NPM packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Seed data for "database"
var friends = require("./app/data/friends.js");

var app = express();
var PORT = process.env.PORT || 3000;

//makes static assets in the public folder available 
app.use(express.static('app/public'));
// Sets up the Express app to handle data parsing
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// =========================================
// Router

// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond to users.

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  