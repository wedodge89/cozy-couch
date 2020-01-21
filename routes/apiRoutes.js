var db = require("../models");
var Book = db.Book;
var DigitalMovie = db.DigitalMovie;
var TelevisionShow = db.TelevisionShow;
var Game = db.Game;
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
      res.json({
        id: data.id,
        firstName: data.firstName
      });
    });
  });

  // POST route for saving a new post
  app.post("/api/books", function(req, res) {
    console.log(req.body);
    db.Book.create({
      bookTitle: req.body.bookTitle,
      bookLink: req.body.bookLink
    }).then(function(dbBook) {
      res.json(dbBook);
    });
  });

  app.get("/api/books", function(req, res) {
    Book.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  app.post("/api/games", function(req, res) {
    console.log(req.body);
    db.Game.create({
      gameTitle: req.body.gameTitle,
      gameLink: req.body.gameLink
    }).then(function(dbGame) {
      res.json(dbGame);
    });
  });

  app.get("/api/games", function(req, res) {
    Game.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  app.post("/api/tvshows", function(req, res) {
    console.log(req.body);
    db.TelevisionShow.create({
      tvTitle: req.body.tvTitle,
      tvLink: req.body.tvLink
    }).then(function(dbShow) {
      res.json(dbShow);
    });
  });

  app.get("/api/tvshows", function(req, res) {
    TelevisionShow.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  app.post("/api/dvds", function(req, res) {
    console.log(req.body);
    db.DigitalMovie.create({
      dvdTitle: req.body.dvdTitle,
      dvdLink: req.body.dvdLink
    }).then(function(dbMovie) {
      res.json(dbMovie);
    });
  });

  app.get("/api/dvds", function(req, res) {
    DigitalMovie.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Log-in existing user
  app.post("/api/login", function(req, res) {
    db.User.findAll({
      where: {
        email: req.body.email
      }
    }).then(function(data) {
      res.json({
        data: data
      });
      // console.log(data)
      console.log(`DB Password: ${data[0].dataValues.pw}`);
      console.log(`Should be input password, but isn't: ${req.body.password}`);
      if (data[0].dataValues.pw === req.body.password) {
        localStorage.clear();
        localStorage.setItem("id", data.id);
        localStorage.setItem("firstName", data.firstName);
      }
    });
  });
};
