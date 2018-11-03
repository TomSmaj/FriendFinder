var friendData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    app.post("/api/tables", function(req, res) {
        friendData.push(req.body);
        
        /*code to find compatible match
        ********************************

        ********************************
        */
        var match = {
            "name":"THis is the match",
            "photo": "This is the match's photo",
            "scores": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        };
        res.json(match);
    });

}