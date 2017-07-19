
exports.up = function(knex, Promise) {
   return knex.schema.createTable('products_country_delivery', function(t){
      t.integer('product_id').notNullable().references('id').inTable('products').onDelete('CASCADE');
      t.integer('country_id').notNullable().references('id').inTable('country').onDelete('CASCADE');
      t.decimal('price');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products_country_delivery');
};
