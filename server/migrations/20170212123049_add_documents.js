
exports.up = function(knex, Promise) {
   return knex.schema.createTable('documents', function(t){
      t.increments('id');
      t.string('path').notNullable();
      t.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('documents');
};
