
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('country').del(),

    // Inserts seed entries
    knex('country').insert({name: 'Украина'})
  );
};
