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
            // newFriend is the user that filled out the survey
      var newFriend = req.body;

      // compute best match from scores
      var bestMatch = {};
      // compare the scores of newFriend with the scores of each friend in the database and find the friend with the smallest difference when each set of scores is compared

      var bestMatchIndex = 0;
      //greatest score difference for a question is 4, therefore greatest difference is 4 times # of questions in survey
      var bestMatchDifference = 40;

      for(var i = 0; i < friends.length; i++) {
        var totalDifference = 0;

        for(var index = 0; index < friends[i].scores.length; index++) {
          var differenceOneScore = Math.abs(friends[i].scores[index] - newFriend.scores[index]);
          totalDifference += differenceOneScore;
        }

        // if the totalDifference in scores is less than the best match so far
        // save that index and difference
        if (totalDifference < bestMatchDifference) {
          bestMatchIndex = i;
          bestMatchDifference = totalDifference;
        }
      }

      // the best match index is used to get the best match data from the friends index
      bestMatch = friends[bestMatchIndex];

      // Put new friend from survey in "database" array
      friends.push(newFriend);

      // return the best match friend
      res.json(bestMatch);
  });
    
}
