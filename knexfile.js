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
  },
  production: {
    client: 'mysql2',
    connection: {
      host: process.env.RAILWAY_DB_HOST || 'shuttle.proxy.rlwy.net',
      port: Number(process.env.RAILWAY_DB_PORT) || 50309,
      user: process.env.RAILWAY_DB_USER || 'root',
      password: process.env.RAILWAY_DB_PASSWORD || 'AtXJVYZHSwCsQammhAmXSTeXLkXCSHAw',
      database: process.env.RAILWAY_DB_NAME || 'railway'
    },
    migrations: {
      directory: './server/utils/database/migrations'
    },
    seeds: {
      directory: './server/utils/database/seeds',
      loadExtensions: ['.ts', '.js'],
      extension: 'ts'
    }
  }
  
  
};
