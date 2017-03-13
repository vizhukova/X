
exports.up = function(knex, Promise) {
   return knex.schema.createTable('seller_documents', function(t){
      t.integer('seller_id').notNullable().references('id').inTable('seller').onDelete('CASCADE');
      t.integer('document_id').notNullable().references('id').inTable('documents').onDelete('CASCADE');
      t.primary(['seller_id', 'document_id']);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('seller_documents');
};
