const db = require("../data/dbConfig.js")

module.exports = {
    getProjects,
    addProject,
    getProjectById,
    getProjectTasks
}

function getProjects() {
    return db("projects")
}

function getProjectById(id) {
    return db("projects as p")
        .where({ id })
}

function getTasks() {
    return db("tasks as t")
        .join("projects as p", "t.id", "p.id")
        .select("t.desc", "t.notes", "t.status", "p.name", "p.desc")
}

function getProjectTasks(id) {
    return db("tasks as t")
        .where({ id: id })
}

function getResources() {
    return db("resources")
}

function addProject(project) {
    return db("projects").insert(project)
}

function addTask(task) {
    return db("tasks").insert(task)
}

function addResource(resource) {
    return db("resources").insert(resource)
}