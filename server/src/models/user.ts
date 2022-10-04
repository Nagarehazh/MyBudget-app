import { DataType } from 'sequelize-typescript'
import { sequelize } from '../database/database'
import { Budget } from './budget';



export const User = sequelize.define('user', {
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userName: {
        type: DataType.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataType.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataType.STRING,
        allowNull: false
    }
})

User.hasMany(Budget, { foreignKey: 'userId', sourceKey: 'id' });
Budget.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' });