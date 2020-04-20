exports.seed = function (knex, Promise) {

  return knex('projects').truncate()

    .then(function () {
      return knex('projects').insert([
        { name: 'think left', desc: 'oh the thinks you can think if you only try!', status: 0 },
        { name: 'think right', desc: 'im running out of good dr seuss quotes', status: 0 },
        { name: 'think high', desc: 'being crazy is not enough', status: 0 },
        { name: 'think low', desc: 'tomorrow is another one', status: 0 },
      ]);
    });
};