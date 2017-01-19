
exports.up = function(knex, Promise) {
   return knex.schema.createTable('city', function(t){
      t.increments('id');
      t.string('name').unique().notNullable();
      t.integer('country_id').notNullable().references('id').inTable('country').onDelete('RESTRICT');
      t.integer('district_id').notNullable().references('id').inTable('district').onDelete('RESTRICT');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('city');
};
