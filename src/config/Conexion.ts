import { Sequelize } from "sequelize";

const sequelize = new Sequelize('Prueba', 'postgres', 'eduardo', {
    host: 'localhost',
    dialect: 'postgres',
    logging:false
});

export default sequelize;