exports.up = function (knex) {
    return knex.schema
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.string('desc')
                .notNullable();
            tbl.string('notes');
            tbl.boolean('status');
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.string('name')
                .notNullable()
                .unique();
            tbl.string('desc')
                .notNullable();
        })
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.string('name')
                .notNullable();
            tbl.string('desc')
                .notNullable();
            tbl.boolean('status');
        })
        .createTable('proj_t', tbl => {
            tbl.increments();
            tbl.integer('project_id')
                .references('id')
                .inTable('projects')
                .notNullable()
                .unsigned()
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.integer('task_id')
                .references('id')
                .inTable('tasks')
                .notNullable()
                .unsigned()
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
        .createTable('proj_r', tbl => {
            tbl.increments();
            tbl.integer('project_id')
                .references('id')
                .inTable('projects')
                .notNullable()
                .unsigned()
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.integer('resource_id')
                .references('id')
                .inTable('resources')
                .notNullable()
                .unsigned()
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('proj_r')
        .dropTableIfExists('proj_t')
        .dropTableIfExists('projects')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
};