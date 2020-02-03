/* eslint-disable quotes */
const express = require("express");
const { dogsQ, reload, displayDogQ } = require("./dog-service");

const dogRouter = express.Router();

dogRouter
  .route("/")
  .get((req, res) => {
    if (!dogsQ.first) {
      // return res.status(400).json({
      //   error: "Sorry there are no dogs available at this time"
      // });
      reload();
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

dogRouter.route("/available").get((req, res) => {
  let dogList = displayDogQ(dogsQ);
  if (!dogsQ.first) {
    return res.status(400).json({
      error: "Sorry there are no dogs available at this time"
    });
  } else {
    console.log(dogList);
    return res.json(dogList);
  }
});
module.exports = dogRouter;
