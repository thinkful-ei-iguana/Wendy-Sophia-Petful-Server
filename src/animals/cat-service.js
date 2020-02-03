/* eslint-disable quotes */
const petData = require("../petData");
const Queue = require("../Queue");

let catsQ = new Queue();

const fillCatQ = catArr => {
  for (let i = 0; i < catArr.length; i++) {
    catsQ.enqueue(catArr[i]);
  }
  return catsQ;
};

const reload = () => {
  console.log("hitting reload...");
  fillCatQ(petData.cats);
};
// fillCatQ(petData.cats);

const displayCatQ = queue => {
  let node = queue.first;
  while (node) {
    console.log(node.value);
    node = node.next;
  }
};

module.exports = { reload, fillCatQ, catsQ, displayCatQ };
