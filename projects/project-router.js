const express = require('express')

const Projects = require('./project-model.js')

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.json(projects)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects'})
        })
})


router.post('/', (req, res) => {
    Projects.addProject(req.body)
        .then(project => {
            res.json(project)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to add project', err})
        })
})


router.get('/resources', (req, res) => {
    Projects.getResources()
        .then(projects => {
            res.json(projects)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects'})
        })
})

router.post('/resources', (req, res) => {
    const resourceData = req.body;
  
    Projects.addResources(resourceData)
    .then(ids => {
      res.status(201).json({ created: ids[0] });
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new resources' });
    });
  });



  router.get('/tasks', (req, res) => {
    Projects.getTasks()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects'})
        })
})


router.post('/tasks', (req, res) => {
    const taskData = req.body;
  
    Projects.addTasks(taskData)
    .then(ids => {
      res.status(201).json({ created: ids[0] });
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new tasks' });
    });
  });


module.exports = router