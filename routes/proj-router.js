const express = require('express');
const router = express.Router();
const db = require('../data/tables-model.js');

router.get("/", (req, res) => {
    db.getProjects()
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "There was an error retrieving the projects list!" })
        })
})

router.get("/:id", (req, res) => {
    db.getProjectById(req.params.id)
        .then(project => {
            project.forEach(project => {
                db.getProjectTasks(req.params.id).then(tasks => {
                    project.tasks = tasks;
                    res.status(201).json(project)
                })

            })

        })
        .catch(err => {
            res.status(500).json({ errorMessage: "There was an error retrieving the project!" })
        })
})
router.get("/:id/tasks", (req, res) => {
    db.getProjectTasks(req.params.id)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "There was an error retrieving the project tasks!" })
        })
})

module.exports = router;