const express = require("express");
const { reload, catsQ } = require("./cat-service");

const catRouter = express.Router();

catRouter
  .route("/")
  .get((req, res) => {
    if (!catsQ.first) {
      return res.status(400).json({
        error: "Sorry there are no cats available at this time"
      });
    }
    var yourTurn = false;
    // are we on the last cat?
    if (catsQ.first.value && 
        catsQ.last.value && 
        catsQ.first.value.id === catsQ.last.value.id) {
      yourTurn = true;
    }
    var response = {
      cat: catsQ.first.value,
      last: catsQ.last,
      yourTurn:  yourTurn
    }
    return res.json(response);
  })
  .delete((req, res) => {
    catsQ.dequeue();
    if (!catsQ.first) {
      return res.status(400).json({
        error: "Sorry there are no cats available at this time"
      });
    }
    return res.json(catsQ.first.value);
  });

catRouter
  .route("/reload")
  .get((req, res) => {
    reload();
    return res.status(200).json({});
  })

module.exports = catRouter;
