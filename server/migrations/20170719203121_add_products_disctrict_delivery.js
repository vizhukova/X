
exports.up = function(knex, Promise) {
   return knex.schema.createTable('products_district_delivery', function(t){
      t.integer('product_id').notNullable().references('id').inTable('products').onDelete('CASCADE');
      t.integer('district_id').notNullable().references('id').inTable('district').onDelete('CASCADE');
      t.decimal('price');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products_district_delivery');
};
