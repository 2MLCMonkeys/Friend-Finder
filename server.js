//DEPENDENCIES
var express = require("express");
var path = require("path");

//creates server
var app = express();

//sets intial port
var PORT = process.env.PORT || 8080;

//Sets up Express app to handle data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Route files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listener for to start server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

