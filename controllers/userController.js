const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  async getUser (req, res) {
    console.log('getUser', req.params.id);
    try {
      const user = await db.User.findOne({ userId: req.params.id })
      console.log('found a user');
      res.json(user);
    } catch (err) {
      console.error('could not find a user', err);
      res.status(404).json(err);
    }
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  async remove (req, res) {
    try {
      const result = await db.User.findOne({ userId: req.params.id })
      if (result) {
        const didRemove = await result.remove();
        if (didRemove) {
          res.json(didRemove);
        } else {
          res.status(500).json('Could not remove the user');
        }
      } else {
        res.status(404).json('User not found!');
      }
    } catch (err) {
      res.status(500).json('Could not find a user to remove');
    }
      
      // .then(dbModel => dbModel.remove())
      // .then(dbModel => res.json(dbModel))
      // .catch(err => res.status(422).json(err));
  },
  async createOrUpdate (req, res) {
    const _id = req.params.id;
    try {
      const result = await db.User.findOneAndUpdate({ userId: _id }, req.body)
      if (result) {
        res.json(result);
      }
    } catch (err) {
      try {
        // res.json(this);
        db.User
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
        // this.create(req, res);
      } catch (err) {
        const msg = `could not update and create a user with id: ${_id}`;
        res.status(422).json(msg);
      }
    }
  }
};


// var express = require("express");
// var bodyParser = require("body-parser");
// var logger = require("morgan");
// var mongoose = require("mongoose");



// // Requiring the `User` model for accessing the `users` collection
// var User = require("./user.js");

// // Initialize Express
// var app = express();
// // Use morgan logger for logging requests
// app.use(logger("dev"));
// // Use body-parser for handling form submissions
// app.use(bodyParser.urlencoded({ extended: true }));
// // Use express.static to serve the public folder as a static directory
// app.use(express.static("public"));



// // Route to post our form submission to mongoDB via mongoose
// app.post("/submit", function(req, res) {
//   // Create a new user using req.body

//   var user = new User(req.body);
//   user.setFullName();
//   user.lastUpdatedDate();

//   User.create(user)
//     .then(function(dbUser) {
//       // If saved successfully, send the the new User document to the client
//       res.json(dbUser);
//     })
//     .catch(function(err) {
//       // If an error occurs, send the error to the client
//       res.json(err);
//     });
// });

//  // Route for grabbing a specific Article by id, populate it with it's note
//         app.get("/profile/:id", function(req, res) {
//             // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
//             db.User.findOne({ _id: req.body._id })
//                 // ..and populate all of the notes associated with it
//                 .populate("note")
//                 .then(function(dbUser) {
//                     // If we were able to successfully find the user with the given id, send it back to the client
//                     res.json(dbUser);
//                 })
//                 .catch(function(err) {
//                     // If an error occurred, send it to the client
//                     res.json(err);
//                 });
//         });

// }

// db.User.remove({})
//                     