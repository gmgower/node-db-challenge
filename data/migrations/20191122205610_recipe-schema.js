
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.string('project_name', 255).notNullable();
            tbl.string('project_description', 255)
            tbl.boolean('completed').defaultTo(false).notNullable();
        })
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.string('task_description', 255).notNullable();
            tbl.string('task_notes', 255)
            tbl.boolean('completed').defaultTo(false).notNullable()
            tbl
                .integer('project_id')
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.string('resource_name', 255).notNullable();
            tbl.string('resource_description', 255)
        })
        .createTable('project_resources', tbl => {
            tbl.increments()

            tbl
                .integer('project_id')
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl
                .integer('resource_id')
                .unsigned()
                .references('id')
                .inTable('resources')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            // tbl.primary(['project_id','resource_id'])
        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects');
};
