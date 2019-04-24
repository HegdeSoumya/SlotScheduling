import {Sequelize} from 'sequelize-typescript';
import {Slot} from '../models/Slot';

const db = process.env.DB_DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const dialect = process.env.DB_DIALECT;

export const sequelize = new Sequelize({
    host,
    database: db,
    dialect: 'postgres',
    username,
    password,
    dialectOptions: {
        useUTC: true,
    },
});

sequelize.addModels([Slot]);

export default sequelize;