const express = require('express');
const router = express.Router();
const db = require('../data/dbConfig.js');

router.route('/')
    .get((req, res) => {
        db('resources')
            .then(resource => {
                res.json({ resource })
            })
            .catch(err => {
                res.status(500).json({ errorMessage: "There was an error retrieving the resources!" })
            })
    })
    .post((req, res) => {
        const resource = req.body;
        db('resources')
            .insert(resource)
            .then(id => {
                res.json({ resource })
            })
            .catch(err => {
                res.status(500).json({ errorMessage: "There was an error adding the resource!" })
            })
    });


module.exports = router;