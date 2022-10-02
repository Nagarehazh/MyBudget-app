import { DataType } from 'sequelize-typescript'
import { sequelize } from '../database/database'

export const Budget = sequelize.define('budget', {
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    concept: {
        type: DataType.STRING,
        allowNull: false
    },
    amount: {
        type: DataType.DECIMAL(10, 2),
        allowNull: false
    },
    date: {
        type: DataType.DATEONLY,
        allowNull: false
    },
    type: {
        type: DataType.ENUM('income', 'expense'),
        allowNull: false
    },
    category: {
        type: DataType.ENUM('food', 'clothes', 'entertainment', 'transportation', 'health', 'other'),
        allowNull: false
    }
})

    