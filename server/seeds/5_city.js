
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('city').del(),

    // Inserts seed entries
    knex('city').insert({country_id: 1, district_id: 16, name: 'Одесса'})
  );
};
