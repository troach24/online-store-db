
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cart').del()
    .then(function () {
      // Inserts seed entries
      return knex('cart').insert([
        {
          id: 1,
          quantity: 4
        },
      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE cart_id_seq RESTART WITH 2;")
    })
};