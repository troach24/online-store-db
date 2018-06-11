
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('inventory').del()
    .then(function () {
      // Inserts seed entries
      return knex('inventory').insert([
        {
          id: 1,
          name: 'Slinky',
          price: "4.99",
          description: "Classic toy that springs and bounces and even walks down stairs!",
          quantity_available: 4,
          image_url: "https://shop.australiangeographic.com.au/media/catalog/product/cache/3/image/540x/9df78eab33525d08d6e5fb8d27136e95/A/Y/AYOA-original-metal-slinky-outbox-web.jpg",
        },
      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE inventory_id_seq RESTART WITH 4;")
    })
};
