const express = require('express');
const CatsService = require('./cat-service');

const catRouter = express.Router();

catRouter
    .route('/')
    .get((req, res) => {
        const cats = CatsService.getAllCats();
        if (!cats) {
            return res.status(400).json({
                error: 'Sorry there are no cats available at this time'
            });
        }
        return res.json(cats);
    })


module.exports = catRouter;