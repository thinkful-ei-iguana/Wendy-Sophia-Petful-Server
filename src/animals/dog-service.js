const petData = require("../petData");
const Queue = require("../Queue");

let dogsQ = new Queue();

const fillDogQ = dogArr => {
  for (let i = 0; i < dogArr.length; i++) {
    dogsQ.enqueue(dogArr[i]);
  }
  return dogsQ;
};

fillDogQ(petData.dogs);

const displayDogQ = queue => {
  let node = queue.first;
  while (node) {
    console.log(node.value);
    node = node.next;
  }
};

module.exports = { fillDogQ, dogsQ };
