// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/eazy-market'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }

};
