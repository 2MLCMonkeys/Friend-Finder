//Load Data
var friendData = require("../data/friends");

//routing
module.exports = function(app){
    //API GET REQUEST
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
      });

    //API POST REQUESTS
    app.post("api/friends", function(req, res){
        friendData.push(req.body);
        res.json(true);
    })
}
