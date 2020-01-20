var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Register a new user.
  app.post("/api/register", function(req, res) {
    db.User.create(req.body).then(function(data) {
      res.json(
        {
          id: data.id, 
          firstName: data.firstName
        }
      );
    });
  });

  // Log-in existing user
  app.post("/api/login", function(req, res) {
    db.User.create(req.body).then(function(data) {
      res.json(
        {
          id: data.id, 
          firstName: data.firstName
        }
      );
    });
  });
