
exports.seed = function(knex) {
  return knex('projects').insert([
      { project_name: 'Project 1', project_description: 'project description 1', completed: true },
      { project_name: 'Project 2', completed: true },

  ])
}