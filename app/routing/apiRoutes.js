var friends = require('../data/friends.js');


module.exports = function (app) {
 // Displays all api json
 app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFriend = req.body;
  
    console.log(newFriend);
  
    friends.push(req.body);

   // Logic starts here
   // iterate through friends array of objects
   // user will be last/most recent object (index of user: friends.length - 1)
   // iterate to scores array of other friends
   // loop through scores and compare to scores of user
   // store results of comparison into results array
   // sum (reduce) results array into final results array
   // index of final results array will correspond to friends array minus 1 (the most recent user)
   // find index of the smallest number (winner), keeping in mind it is off by 1
   // go back to friends array and find the match
  
  //  var newFriend = req.body;
        var scoreComparison = [];
   for (var i = 0; i < (friends.length - 1); i++){
        var totalDifference = 0;
        // var leastDiff = 0;
     for(let x = 0; x < friends[i].scores.length; x++){
       var difference = Math.abs(parseInt(newFriend.scores[x]) - friends[i].scores[x]);
       totalDifference += difference;
      //  console.log(totalDifference);
     }
    //  console.log(totalDifference);
     scoreComparison.push(totalDifference);
     var min = Math.min.apply(Math, scoreComparison)
     console.log(scoreComparison);
      console.log(scoreComparison.indexOf(min) + "Your Match!");
    //  leastDiff = totalDifference     
    //  if (totalDifference < leastDiff) {
    //    leastDiff = totalDifference
    //  }
    //  console.log(`we've got a winner: ${leastDiff}`)
      // console.log(friends[i].scores);
      // var difference = friends[friends.length].scores[value]-friends[i].scores[value];
      // console.log(difference);
   }
    res.json(req.body);
  });
}
 