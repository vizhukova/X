
exports.up = function(knex, Promise) {
   return knex.schema.createTable('seller_addresses', function(t){
      t.integer('seller_id').notNullable().references('id').inTable('seller').onDelete('CASCADE');
      t.integer('addresses_id').notNullable().references('id').inTable('addresses').onDelete('CASCADE');
      t.primary(['seller_id', 'addresses_id']);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('seller_addresses');
};
