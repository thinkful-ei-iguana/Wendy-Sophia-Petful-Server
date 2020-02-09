/* eslint-disable quotes */
const express = require("express");
const { reload, catsQ } = require("./cat-service");

const catRouter = express.Router();

catRouter
  .route("/")
  .get((req, res) => {
    if (!catsQ.first) {
      reload();
    }

    var response = {
      cat: catsQ.first.value
    };

    return res.json(response);
  })
  .delete((req, res) => {
    catsQ.dequeue();
    if (!catsQ.first) {
      reload();
    }
    return res.json(catsQ.first.value);
  });
catRouter.route("/morecats").get((req, res, next) => {
  if (!catsQ.first) {
    reload();
  }
  return res.status(200).json({});
});
catRouter.route("/allcats").get((req, res, next) => {
  reload();

  res.json(catsQ.first.next);
});

module.exports = catRouter;
