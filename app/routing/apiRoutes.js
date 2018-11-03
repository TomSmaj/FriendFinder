var friendData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res) {
        var nuData = req.body;

        var currentBestMatch = {
            score: 100,
            index: 0
        };

        for(i = 0; i < friendData.length; i++){
            var current = friendData[i];
            var runningScore = 0;
            for(j = 0; j < 10; j++){
                runningScore += Math.abs(parseInt(current.scores[j], 10) - parseInt(nuData.scores[j], 10));
            }
            if(runningScore <= currentBestMatch.score){
                currentBestMatch.score = runningScore;
                currentBestMatch.index = i;
            }
        }
        

        friendData.push(nuData);
        res.json(friendData[currentBestMatch.index]);
    });

}