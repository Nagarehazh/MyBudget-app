import { Sequelize } from 'sequelize-typescript'
import * as dotenv from 'dotenv'
dotenv.config()

const dbname = process.env.DB_NAME
const secret_key = process.env.SECRET_KEY

export const sequelize = new Sequelize(`postgres://postgres:${secret_key}@localhost:5432/${dbname}`)
