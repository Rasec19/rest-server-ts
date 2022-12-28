import { Sequelize } from 'sequelize';


const db = new Sequelize('node', 'root', '1234578', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

export default db;
