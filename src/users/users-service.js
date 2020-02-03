/* eslint-disable quotes */
const userData = require("../userData");
const Queue = require("../Queue");

let usersQ = new Queue();

const fillUserQ = userArr => {
  for (let i = 0; i < userArr.length; i++) {
    usersQ.enqueue(userArr[i]);
  }
  return usersQ;
};

const reload = () => {
  console.log("hitting reload...");
  fillUserQ(userData.dogs);
};

const displayUserQ = queue => {
  let node = queue.first;
  while (node) {
    console.log(node.value);
    node = node.next;
  }
};

module.exports = { usersQ, reload, displayUserQ };
