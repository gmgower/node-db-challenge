
exports.seed = function(knex) {
  return knex('resources').insert([
      { resource_name: 'resource 1 name', resource_description: 'resource 1 description' },
      { resource_name: 'resource 2 name', resource_description: 'resource 2 description' },
  ])
}