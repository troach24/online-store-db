// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/online-store-db'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }

};
