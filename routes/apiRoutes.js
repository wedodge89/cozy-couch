var db = require("../models");

module.exports = function(app) {
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
        
        console.log(`DB Password: ${data[0].dataValues.pw}`)
        console.log(`Input password: ${req.body.pw}`)
        // Need to fix this. Local Storage is front end, not back. 
        if (data[0].dataValues.pw === req.body.pw) {
          // localStorage.clear();
          // localStorage.setItem("id", data.id)
          // localStorage.setItem("firstName", data.firstName)
            let loginData = {
              "id": data[0].dataValues.id, 
              "firstName": data[0].dataValues.firstName
            };
            console.log(loginData)
        } else {
          alert("The email or password doesn't match.")
        };
      });
  });
};
