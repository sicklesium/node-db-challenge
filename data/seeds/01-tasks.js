exports.seed = function (knex) {

  return knex('tasks').truncate()

    .then(function () {
      return knex('tasks').insert([
        { desc: 'one task', notes: 'i like nonsense!', status: 0 },
        { desc: 'two task', notes: 'it wakes up the brain cells!', status: 1 },
        { desc: 'red task', notes: 'today you are you', status: 0 },
        { desc: 'blue task', notes: 'that is truer than true!', status: 1 }
      ]);
    });
};