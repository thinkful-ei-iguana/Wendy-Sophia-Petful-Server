const express = require("express");
const { dogsQ } = require("./dog-service");

const dogRouter = express.Router();

dogRouter
  .route("/")
  .get((req, res) => {
    if (!dogsQ.first) {
      return res.status(400).json({
        error: "Sorry there are no dogs available at this time"
      });
    }
    return res.json(dogsQ.first.value);
  })
  .delete((req, res) => {
    dogsQ.dequeue();
    if (!dogsQ.first) {
      return res.status(400).json({
        error: "Sorry there are no dogs available at this time"
      });
    }
    return res.json(dogsQ.first.value);
  });

module.exports = dogRouter;
