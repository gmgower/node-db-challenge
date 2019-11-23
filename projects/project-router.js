const express = require('express')

const Projects = require('./project-model.js')

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => res.json(projects))
    .catch(() => res.status(500).json({ message: 'Failed to get projects' }));
})

module.exports = router