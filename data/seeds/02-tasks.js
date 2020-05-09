
exports.seed = function(knex) {
  return knex('tasks').insert([
      { project_id: 1, task_description: 'task 1 description', task_notes: 'task 1 notes', completed: true },
      { project_id: 1, task_description: 'task 3 description', task_notes: 'task 3 notes', completed: false },
      { project_id: 2, task_description: 'task 1 description', task_notes: 'task 1 notes', completed: false},
      { project_id: 2, task_description: 'task 2 description', task_notes: 'task 2 notes', completed: true }, 
  ])
}