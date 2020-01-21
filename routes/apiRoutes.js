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
    db.User.findAll({
      where: {
        email: req.body.email
      }
    }).then(function(data) {
      res.json(
        {
          data: data
        }
      )
        // console.log(data)
        console.log(`DB Password: ${data[0].dataValues.pw}`)
        console.log(`Should be input password, but isn't: ${req.body.password}`)
        if (data[0].dataValues.pw === req.body.password) {
          localStorage.clear();
          localStorage.setItem("id", data.id)
          localStorage.setItem("firstName", data.firstName)
        }
    })
  });

};
