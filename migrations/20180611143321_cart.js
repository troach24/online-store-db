
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cart', (table) => {
    table.increments();
    table.integer('inventory_id').references('id').inTable('inventory');
    table.text('cart_item_name');
    table.float('cart_item_price');
    table.text('cart_item_description');
    table.text('cart_item_image_url');
    table.integer('quantity');
    table.boolean('active');
  })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("cart");
};
