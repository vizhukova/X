exports.up = function (knex, Promise) {
    return knex.schema.createTable('products_images', function (t) {
        t.integer('product_id').notNullable().references('id').inTable('products').onDelete('CASCADE');
        t.string('image');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('products_images');
};
