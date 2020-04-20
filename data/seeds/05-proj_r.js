exports.seed = function (knex, Promise) {

  return knex('proj_r').truncate()

    .then(function () {
      return knex('proj_r').insert([
        { project_id: 1, resource_id: 1 },
        { project_id: 1, resource_id: 2 },
        { project_id: 1, resource_id: 3 }
      ]);
    });
};