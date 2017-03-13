
exports.up = function(knex, Promise) {
   return knex.schema.createTable('buyer_addresses', function(t){
      t.integer('buyer_id').notNullable().references('id').inTable('buyer').onDelete('CASCADE');
      t.integer('addresses_id').notNullable().references('id').inTable('addresses').onDelete('CASCADE');
      t.primary(['buyer_id', 'addresses_id']);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('buyer_addresses');
};
