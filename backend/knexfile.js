// Update with your config settings.

module.exports = {

  development: {
      client: 'mysql',
      version: '5.7',
      connection: {
        host : '0.0.0.0',
        database: 'backend',
        user: 'root',
        password: 'root',
      },
      migrations: {
        directory: './src/database/migrations'
      }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
