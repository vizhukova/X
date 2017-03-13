
exports.up = function(knex, Promise) {
   return knex.schema.createTable('locations', function(t){
      t.increments('id');
      t.string('name');
      t.integer('country_id').notNullable().references('id').inTable('country').onDelete('RESTRICT');
      t.integer('city_id').notNullable().references('id').inTable('city').onDelete('RESTRICT');
      t.integer('district_id').notNullable().references('id').inTable('district').onDelete('RESTRICT');
      t.string('build');
      t.string('additional_build');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('locations');
};
