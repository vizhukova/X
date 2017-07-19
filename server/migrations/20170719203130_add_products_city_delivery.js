
exports.up = function(knex, Promise) {
   return knex.schema.createTable('products_city_delivery', function(t){
      t.integer('product_id').notNullable().references('id').inTable('products').onDelete('CASCADE');
      t.integer('city_id').notNullable().references('id').inTable('city').onDelete('CASCADE');
      t.decimal('price');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products_city_delivery');
};
