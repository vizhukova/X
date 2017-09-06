exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', function(t){
      t.increments('id');
      t.string('name').notNullable();
      t.string('description');
      t.decimal('price').notNullable();
      t.integer('category_id').notNullable().references('id').inTable('categories').onDelete('RESTRICT');
      t.integer('seller_id').notNullable().references('id').inTable('seller').onDelete('RESTRICT');
      t.integer('brand_id').references('id').inTable('brands').onDelete('RESTRICT');
      t.string('custom_brand_name');
      t.string('main_image');
      t.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};