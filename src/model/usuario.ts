import { DataTypes } from 'sequelize';
import sequelize from '../config/Conexion';

const Usuario = sequelize.define("usuario", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: DataTypes.STRING,
}, {
    timestamps: false
});

Usuario.sync();

export default Usuario;

