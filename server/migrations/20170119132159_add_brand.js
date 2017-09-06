exports.up = function(knex, Promise) {
  return knex.schema.createTable('brands', function(t){
      t.increments('id');
      t.string('name').notNullable();
      t.string('image');
      t.text('description');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('brands');
};