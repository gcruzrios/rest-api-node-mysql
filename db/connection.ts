import { Sequelize } from 'sequelize';


const db = new Sequelize('node', 'root', 'Grvn240675$$', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});

export default db;
