const express = require('express');
const DogsService = require('./dog-service');

const dogRouter = express.Router();

dogRouter
    .route('/dogs')
    .get((req, res) => {
        const dogs = CatsService.getAllDogs();
        if (!dogs) {
            return res.status(400).json({
                error: 'Sorry there are no cats at the moment'
            })
            return res.json(dogs);
        }
    })

module.exports = dogRouter;