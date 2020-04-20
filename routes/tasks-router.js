const express = require('express');
const router = express.Router();
const db = require('../data/dbConfig.js');

router.route('/')
    .get((req, res) => {
        db('tasks')
            .then(task => {
                res.json({ task })
            })
            .catch(err => {
                res.status(500).json({ errorMessage: "There was an error retrieving the task!" })
            })
    })
    .post((req, res) => {
        const task = req.body;
        db('tasks')
            .insert(task)
            .then(id => {
                res.json({ task })
            })
            .catch(err => {
                res.status(500).json({ errorMessage: "There was an error adding the task!" })
            })
    });


module.exports = router;