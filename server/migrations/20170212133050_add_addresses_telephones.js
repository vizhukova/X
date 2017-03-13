
exports.up = function(knex, Promise) {
   return knex.schema.createTable('addresses_telephones', function(t){
      t.integer('telephones_id').notNullable().references('id').inTable('telephones').onDelete('CASCADE');
      t.integer('addresses_id').notNullable().references('id').inTable('addresses').onDelete('CASCADE');
      t.primary(['telephones_id', 'addresses_id']);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('addresses_telephones');
};
