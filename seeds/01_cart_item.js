
exports.seed = function(knex, Promise) {
  return knex('cart').del()
    .then(function () {
      return knex('cart').insert([
        {
          id: 1,
          // keep for a sec ;)
          // inventory_id: inventory.id,
          quantity: 1
        },
      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE cart_id_seq RESTART WITH 1;")
    })
};