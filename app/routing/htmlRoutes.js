// DEPENDENCIES //
var path = require('path');

//  ROUTES //
module.exports = function(app){
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });

    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });
    
      app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
      });
    
      // IF NOT MATHCING ROUTE DEFAULT TO INDEX //
      app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });
    };
