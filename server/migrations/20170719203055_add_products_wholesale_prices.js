
exports.up = function(knex, Promise) {
   return knex.schema.createTable('products_wholesale_prices', function(t){
      t.integer('product_id').notNullable().references('id').inTable('products').onDelete('CASCADE');
      t.decimal('price');
      t.integer('count');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products_wholesale_prices');
};
