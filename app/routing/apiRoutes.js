//Load Data
var friends = require("../data/friends.js");

//routing 
module.exports = function (app) {
    //API GET REQUEST
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //API POST REQUESTS
    app.post("/api/friends", function (req, res) {
     //PUSHES TO FRIENDS ARRAY
       friends.push(req.body);

      console.log(req.body);
      var newFriend = req.body;
      
      var bestMatch = 0;
      var matchDifference = 40;
      // var friendScores = [];
      
      //ITERATES THROUGH EACH FRIEND IN FRIENDS ARRAY
      for(var i = 0; i < friends.length - 1; i++){
        var matchScore = 0;
        //ITERATES THROUGH SCORES OF EACH FRIEND
        console.log(friends[i].name);
        for(var j = 0; j < friends[i].scores.length; j++){
          console.log(friends[i].scores[j]);
          var x = friends[i].scores[j];
          var y = newFriend.scores[j];
          var z = Math.abs(x - y);
          matchScore += z;

          if(matchScore < matchDifference){
            bestMatch = i;
            matchDifference = matchScore;
          }
          
        }

      }

      var matchedFriend = friends[bestMatch];
      console.log(matchedFriend);
      res.json(matchedFriend);

  });
    
}
