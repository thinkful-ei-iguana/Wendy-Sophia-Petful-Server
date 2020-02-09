/* eslint-disable quotes */
const express = require("express");
const { reload, catsQ, fillCatQ, displayCatQ } = require("./cat-service");
const petData = require("../petData");

const catRouter = express.Router();

catRouter
  .route("/")
  .get((req, res) => {
    // if (!catsQ.first) {
    //   return res.status(400).json({
    //     error: "Sorry there are no cats available at this time"
    //   });
    if (!catsQ.first) {
      reload();
    }
    var yourTurn = false;
    // are we on the last cat?
    if (
      catsQ.first.value &&
      catsQ.last.value &&
      catsQ.first.value.id === catsQ.last.value.id
    ) {
      yourTurn = true;
    }
    var response = {
      cat: catsQ.first.value,
      last: catsQ.last,
      yourTurn: yourTurn
    };

    return res.json(response);
  })
  .delete((req, res) => {
    catsQ.dequeue();
    if (!catsQ.first) {
      // return res.status(400).json({
      //   error: "Sorry there are no cats available at this time"
      // });
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
  // if (!catsQ.first) {
  reload();
  // } else {
  res.json(catsQ.first.next);
  // }
});

module.exports = catRouter;
