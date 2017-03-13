
exports.up = function(knex, Promise) {
   return knex.schema.createTable('category_category', function(t){
      t.integer('parent_id').notNullable().references('id').inTable('categories').onDelete('CASCADE');
      t.integer('children_id').notNullable().references('id').inTable('categories').onDelete('CASCADE');
      t.primary(['parent_id', 'children_id']);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('category_category');
};
