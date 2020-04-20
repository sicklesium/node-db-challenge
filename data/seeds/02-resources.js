exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { name: 'person', desc: 'only one comes in the box' },
        { name: 'tool', desc: 'just what tool is it?' },
        { name: 'special software', desc: 'it is extra special! you will not be disappointed' }
      ]);
    });
};