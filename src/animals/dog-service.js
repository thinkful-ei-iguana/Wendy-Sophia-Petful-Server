const petData = require("../petData");
const Queue = require("../Queue");
const { dogs } = require("../Queue");

const DogService = {
    getAllDogs() {
        //get all cats
        let tempList = [];
        let dogQ = cats.length;
        if (dogQ < 5) {
            while (dogQ < 5) {
                this.addDog();
                catQ++;
            }
        }

        let dogResults = this.dogList(cats);
        console.log(`${dogResults[0].name} is next to be adopted`);
        return dogResults

    },
    addCat(cats, tempList) {
        //add the cat to the queue


    },
    deleteCat() {
        //deletes cats once adopted
        if (dogs) {
            dogs.enqueue(dogs.dequeue());
        }
        return 'Dog was adopted'
    },
    catList(dogs) {
        //push cats into an array
        let dogsList = [];
        let current = dogs.first;
        while (current !== null) {
            dogsList.push(current.value);
            current = current.next
        }
        return dogsList;
    }

};

module.exports = DogService;