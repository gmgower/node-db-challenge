const db = require('../data/db-config');



function getProjects() {
    return db('projects');
}

module.exports = {
    getProjects,


};