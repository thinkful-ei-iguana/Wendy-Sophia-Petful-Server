/* eslint-disable quotes */
const express = require("express");
const { reload, dogsQ } = require("./dog-service");

const dogRouter = express.Router();

dogRouter
  .route("/")
  .get((req, res) => {
    if (!dogsQ.first) {
      reload();
    }

    var response = {
      dog: dogsQ.first.value
    };

    return res.json(response);
  })
  .delete((req, res) => {
    dogsQ.dequeue();
    if (!dogsQ.first) {
      reload();
    }
    return res.json(dogsQ.first.value);
  });
dogRouter.route("/moredogs").get((req, res, next) => {
  if (!dogsQ.first) {
    reload();
  }
  return res.status(200).json({});
});
dogRouter.route("/alldogs").get((req, res, next) => {
  reload();

  res.json(dogsQ.first.next);
});

module.exports = dogRouter;
