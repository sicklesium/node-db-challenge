exports.seed = function (knex, Promise) {

  return knex('proj_t').truncate()

    .then(function () {
      return knex('proj_t').insert([
        { project_id: 1, task_id: 1 },
        { project_id: 1, task_id: 2 },
        { project_id: 2, task_id: 3 }
      ]);
    });
};