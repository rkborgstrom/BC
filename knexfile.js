// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/friends'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
