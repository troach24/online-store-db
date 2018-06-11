
exports.up = function(knex, Promise) {
  return knex.schema.createTable('inventory', (table) => {
    table.increments();
    table.text('name');
    table.float('price');
    table.text('description');
    table.integer('quantity_available');
    table.text('image_url');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('inventory');
};
