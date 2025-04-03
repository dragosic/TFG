// knexfile.js
export default {
  development: {
    client: 'mysql2',
    connection: {
      host: 'host.docker.internal', // Or 'db' if using Docker on Linux
      user: 'aps',
      password: 'aps',
      database: 'aps',
      port: 3306
    },
    migrations: {
      directory: './server/utils/database/migrations'
    },
    seeds: {
      directory: './server/utils/database/seeds',
      loadExtensions: ['.ts','.js'],
      extension: 'ts'
    }
  }
};
