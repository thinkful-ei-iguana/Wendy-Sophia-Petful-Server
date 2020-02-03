/* eslint-disable quotes */
const express = require("express");
const { usersQ, reload, displayUserQ } = require("./users-service");

const userRouter = express.Router();

userRouter
  .route("/")
  .get((req, res) => {
    if (!usersQ.first) {
      // return res.status(400).json({
      //   error: "Sorry there are no dogs available at this time"
      // });
      reload();
    }
    return res.json(usersQ.first.value);
  })
  .delete((req, res) => {
    usersQ.dequeue();
    if (!usersQ.first) {
      return res.status(400).json({
        error: "Sorry there are no dogs available at this time"
      });
    }
    return res.json(usersQ.first.value);
  });

userRouter.route("/available").get((req, res) => {
  let userList = displayUserQ(usersQ);
  if (!usersQ.first) {
    return res.status(400).json({
      error: "Sorry there are no dogs available at this time"
    });
  } else {
    console.log(userList);
    return res.json(userList);
  }
});
module.exports = userRouter;
