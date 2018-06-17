
exports.seed = function(knex, Promise) {
  return knex('cart').del()
    .then(function () {
      return knex('cart').insert([
        {
          id: 1,
          inventory_id: 1,
          cart_item_name: "Slinky",
          cart_item_price: 4,
          cart_item_description: "Classic toy that springs and bounces and even walks down stairs!",
          cart_item_image_url: "https://shop.australiangeographic.com.au/media/catalog/product/cache/3/image/540x/9df78eab33525d08d6e5fb8d27136e95/A/Y/AYOA-original-metal-slinky-outbox-web.jpg",
          quantity: 3,
        },
      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE cart_id_seq RESTART WITH 2;")
    })
};