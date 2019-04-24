// {
//   "development": {
//     "username": "slotuser",
//     "password": "password",
//     "database": "slotservice",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   }
// }

require('dotenv').config();

module.exports = {
    [process.env.NODE_ENV || "local"]: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        port: process.env.DB_PORT,
        migrationStorageTableName: "migrations",
        dialectOptions: {
            useUTC: true
        },
        timezone: "00:00"
    }
};