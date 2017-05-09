
exports.up = function(knex, Promise) {
   return knex.schema.createTable('categories', function(t){
      t.increments('id');
      t.string('name').unique().notNullable();
      t.integer('seller_id');
      t.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories');
};
