
exports.up = function(knex, Promise) {
   return knex.schema.createTable('seller_locations', function(t){
      t.integer('seller_id').notNullable().references('id').inTable('seller').onDelete('CASCADE');
      t.integer('location_id').notNullable().references('id').inTable('locations').onDelete('CASCADE');
      t.primary(['seller_id', 'location_id']);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('seller_locations');
};
