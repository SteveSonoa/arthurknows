var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");



// Requiring the `User` model for accessing the `users` collection
var User = require("./user.js");

// Initialize Express
var app = express();
// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));



// Route to post our form submission to mongoDB via mongoose
app.post("/submit", function(req, res) {
  // Create a new user using req.body

  var user = new User(req.body);
  user.setFullName();
  user.lastUpdatedDate();

  User.create(user)
    .then(function(dbUser) {
      // If saved successfully, send the the new User document to the client
      res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});

 // Route for grabbing a specific Article by id, populate it with it's note
        app.get("/profile/:id", function(req, res) {
            // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
            db.User.findOne({ _id: req.body._id })
                // ..and populate all of the notes associated with it
                .populate("note")
                .then(function(dbUser) {
                    // If we were able to successfully find the user with the given id, send it back to the client
                    res.json(dbUser);
                })
                .catch(function(err) {
                    // If an error occurred, send it to the client
                    res.json(err);
                });
        });

}

db.User.remove({})
                    