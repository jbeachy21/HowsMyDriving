var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/cars/:make", function (req, res) {
    db.cars.findAll({
      where: {
        make: req.params.make
      }
    }).then(function (dbModels) {
      res.json(dbModels);
    });
  });

<<<<<<< HEAD
  app.get("/api/cars/:model", function (req, res) {
    db.cars.findAll({
      where: {
        model: req.params.model
      }
    }).then(function (dbModels) {
      res.json(dbModels);
=======
  //Create a new user
  app.post("/api/users", function(req, res) {
    console.log(req.body);
    db.Users.create({
      username: req.body.username,
      password: req.body.password
    }).then(function(dbUser) {
      res.json(dbUser);
>>>>>>> 0c5b3714b094047db30665c29aed1475df127934
    });
  });

  app.get("/api/reviews/:lp", function (req, res) {
    db.reviews.findAll({
      where: {
        license_plate: req.params.lp
      }
    }).then(function (dbReviews) {
      res.json(dbReviews);
    });
  });

  app.get("/api/users/:email/:password", function (req, res) {
    db.user.findAll({
      where: {
        email: req.params.email,
        password: req.params.password
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/users", function(req, res) {
    db.user.create({
      email: req.body.email,
      password: req.body.password,
      user_acces: req.body.userAccess
    }).then(function(dbUser) {
      res.json(dbUser);
    }).catch(function(err) {
      res.json(err);
    })
  })
};
