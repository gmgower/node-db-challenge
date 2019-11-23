const db = require('../data/db-config');

function getProjects() {
    return db('projects')
        .then(projects => {
            projects.map( project => {
                if(project.completed) {
                    project.completed = true
                }
                else {
                    project.completed = false
                }
            })
            return projects
        })
}


function addProject(projectData) {
    return db('projects')
        .insert(projectData, 'id')
        .then(([id]) => {
            return db('projects')
                .where({ id })
                .then(projectEntry => {
                    return projectEntry
                })
        })
}

function getResources(){
    return db('resources')
} 

function addResources(resourcesData) {
    return db('resources').insert(resourcesData)
}

// function getTasks() {
//     return db('tasks')
//         .then(tasks => {
//             tasks.map( task => {
//                 if(task.completed) {
//                     task.completed = true
//                 }
//                 else {
//                     task.completed = false
//                 }
//             })
//             return tasks
//         })
// }

function getTasks(id) {
    return db.select('project_name', 'projects_description', 'tasks_description', 'tasks_notes', 'tasks_completed', 'tasks_project_id')
             .from('projects')
             .join('tasks', 'tasks.project_id', 'projects.id' )
             .where({ project_id: id })
}


function addTasks(taskData) {
    return db('tasks').insert(taskData)
}




module.exports = {
  getProjects,
  addProject,
  getResources,
  addResources,
  getTasks,
  addTasks
};
