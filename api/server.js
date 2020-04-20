const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet(), express.json());

const projects = require('../routes/proj-router.js');
const resources = require('../routes/res-router.js');
const tasks = require('../routes/tasks-router.js');

server
    .route('/')
    .get((req, res) => {
        res.send(`Let's get funky!`);
    });

server.use('/api/projects', projects);
server.use('/api/resources', resources);
server.use('/api/tasks', tasks);

module.exports = server;