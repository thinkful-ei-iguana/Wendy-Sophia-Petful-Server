const express = require("express");
const { fillCatQ, catsQ } = require("./cat-service");

const catRouter = express.Router();

catRouter
  .route("/")
  .get((req, res) => {
    if (!catsQ.first) {
      return res.status(400).json({
        error: "Sorry there are no cats available at this time"
      });
    }
    return res.json(catsQ.first.value);
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

module.exports = catRouter;
