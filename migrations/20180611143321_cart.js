
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cart', (table) => {
    table.increments();
    table.integer('inventory_id').unsigned().references('id').inTable('inventory')onDelete("CASCADE");
    table.integer('quantity');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cart');
};
