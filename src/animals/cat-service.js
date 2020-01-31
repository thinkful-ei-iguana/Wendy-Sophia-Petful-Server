/* eslint-disable quotes */
const petData = require("../petData");
const Queue = require("../Queue");
const { cats } = require("../Queue");

const CatsService = {
  getAllCats() {
    //get all cats
    let tempList = [];
    let queueSize = cats.length;
    if (queueSize < 5) {
      while (queueSize < 5) {
        this.addCat(cats, tempList);
        queueSize++;
      }
    }

    let catResults = this.catList(cats);
    console.log(`${catResults[0].name} is next to be adopted`);
    return catResults

  },
  addCat(cats, tempList) {
    //add the cat to the queue
    let checkedCat = Math.ceil(5 * Math.random() - 1)
    let cat;
    if (tempList.indexOf(checkedCat) === -1) {
      if (tempList.length < petData.cats.length) {
        tempList.push(checkedCat);
        cat = petData.cats[checkedCat];
        cats.enqueue(cat);
      }
    }
    else {
      this.addCat(cats, tempList);
    }
  },
  deleteCat() {
    //deletes cats once adopted
    if (cats) {
      cats.enqueue(cats.dequeue());
    }
    return 'Cat was adopted'
  },
  catList(cats) {
    //push cats into an array
    let catList = [];
    let current = cats.first;
    while (current !== null) {
      catList.push(current.value);
      current = current.next
    }
    return catList;
  }

};

module.exports = CatsService;
